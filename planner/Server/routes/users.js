const {User} = require('../models/user');
const {Task} = require('../models/task');
const express = require('express');
const router = express.Router();
const task = require('../routes/tasks');

//Get ALL Users Request

router.get('/', async(req, res) => {
    try {
        const allUsers = await User.find();
        return res.send(allUsers);

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
        const userName = await User.find({name: req.params.name , email: req.params.email});
        if(!userName.length) return res.send("username not found")
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
        if(!userName.length) return res.send("username not found")
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
        const user = await User.findById({_id: req.params.userId});
        if(!user) return res.send("user not found")
        return res.send(user);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }

});

//Add User

router.post('/', async(req, res) => {
    try {

        const user = new User({name: req.body.name, email: req.body.email, password: req.body.password})
        console.log(user)
        await user.save();
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
