const {Task, validateTask} = require('../models/task');
const express = require('express');
const router = express.Router();

//CREATE TASK
router.post("/create", async(req, res, next) => {
    try {
        const {error} = validateTask(req.body);
        console.log(req.body)
        if (error) 
            return res.status(400).send(error);
        
        // Need to validate body before continuing
        const task = new Task({
            userId: req.body.userId,
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            dateAdded: req.body.dateAdded,
            completionDate: req.body.completionDate
        })
        await task.save();
        //task.push(task)
        return res.send(task);
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//UPDATE
router.put("/update/:taskId", async(req, res, next) => {
    Task
        .findOneAndUpdate({
            _id: req.params.taskId
        }, {
            $set: req.body
        }, {
            upsert: true,
            new: true
        }, function (err, doc) {
            if (err) 
                return res.send(500, {error: err});
            return res.send(doc);
        });
});

//DELETE
router.delete('/delete/:userId/:taskId', async(req, res) => {
    try {
        Task
            .findOneAndRemove({
                _id: req.params.taskId
            }, function (err, doc) {
                if (err) 
                    return res.send(500, {error: err});
                return res.send("Task deleted");
            });
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//READ
router.get('/getTasks/:userId/category/:categoryName', async(req, res) => {
    try {
        let params = {}
        if (req.params.categoryName == 'All') {
            params = {
                userId: req.params.userId
            }
        } else {
            params = {
                userId: req.params.userId,
                category: req.params.categoryName
            }
        }

        let tasks = await Task.find(params)
        return res.send(tasks)
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//READ BY Category
router.get('/getCategoryName/:userId/:categoryName', async(req, res) => {
    try {
        let tasks = await Task.find({category: req.params.categoryName, userId: req.params.userId})
        return res.send(tasks)
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

module.exports = router;