const {User, validateUser} = require('../models/user');
const {Task, validateTask} = require('../models/task');
const express = require('express');
const router = express.Router();
const task = require('../routes/tasks');
const bcrypt = require('bcrypt');

//CREATE TASK BY USER
router.post("/tasks/create", async(req, res, next) => {
    try {
        const {error} = validateTask(req.body);
        console.log(req.body)
        if (error) 
            return res.status(400).send(error);
        
        // Need to validate body before continuing
        const task = new Task({
            userId: req.body._Id,
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            dateAdded: req.body.dateAdded,
            completionDate: req.body.completionDate
        })
        await task.save();
        return res.send(task);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//CREATE USER
router.post('/', async(req, res) => {
    try {
        const {error} = validateUser(req.body);

        if (error) 
            return res.status(400).send(error);
        
        let user = await User.findOne({email: req.body.email});
        if (user) 
            return res.status(400).send("Credentials Taken")

        const salt = await bcrypt.genSalt(10);

        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt)
        })

        await user.save();
        return res.send({_id: user._id, name: user.name, email: user.email});
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`)
    }
})

//Get ALL Users Request
router.get('/:userId', async(req, res) => {
    try {
        const allUsersRequests = await User.find();
        return res.send(allUsersRequests);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//GET USER BY NAME and email
router.get('/getByUserNameAndEmail/:name/:email', async(req, res) => {
    try {
        console.log(req.body);
        const userName = await User.find({name: req.params.name, email: req.params.email});
        if (!userName.length) 
            return res.send("username not found")
        return res.send(userName);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//FIND USER BY *JUST* ID
router.get('/getByUserName/:name', async(req, res) => {
    try {
        console.log(req.body);
        const userName = await User.find({name: req.params.name});
        if (!userName.length) 
            return res.send("username not found")
        return res.send(userName);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }

});

//Find User BY ID
router.get('/getByUserId/:userId', async(req, res) => {
    try {
        console.log(req.params.id);
        const user = await User.findById({_id: req.params.user_Id});
        if (!user) 
            return res.send("user not found")
        return res.send(user);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }

});

//EDIT USER
router.put('/:id', async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) 
            return res.status(400).send(error);
        const user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, {new: true});
        if (!user) 
            return res.status(400).send(`The user with id "${req.params.id}" d
    oes not exist.`);
        await user.save();
        return res.send(user);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//DELETE USER BY ID
router.delete("/:id", function (req, res, next) {
    User
        .findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) 
                return next(err);
            res.json(post);
        });
});

module.exports = router;
