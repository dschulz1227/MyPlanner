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
        const task = new Task({userId: req.body._Id,title: req.body.title, category: req.body.category, content: req.body.content, dateAdded: req.body.dateAdded, completionDate: req.body.completionDate})
        await task.save();
        Tasks.push(task)
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
router.delete('/delete/:taskId', async(req, res) => {
    try {

        Task
            .findOneAndRemove({
                _id: req.params.taskId
            }, function (err, doc) {
                if (err) 
                    return res.send(500, {error: err});
                return res.send("Task id deleted");
            });
    } catch (ex) {
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

//READ

router.get('/getTasks/:userId', async(req, res) => {
    try {

        let tasks = await Task.find({userId: req.params.userId})
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

module.exports = router;
