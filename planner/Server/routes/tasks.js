const {User} = require('../models/user');
const {Task} = require('../models/task');
const express = require('express');
const router = express.Router();




//////// NEW ROUTES
//CREATE
router.post("/create", async (req, res, next) => {
    let task = new Task(req.body);
    await task.save();
    return res.send(task)
});


//UPDATE
router.put("/update/:taskId", async (req, res, next) => {
    Task.findOneAndUpdate({ _id: req.params.taskId }, { $set: req.body }, { upsert: true, new: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send(doc);
    });
});


//DELETE
router.delete('/delete/:taskId', async (req, res) => {
    try {
        
        Task.findOneAndRemove({ _id: req.params.taskId }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send("Task id deleted");
        });
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//READ

router.get('/getTasks/:userId', async (req, res) => {
    try {
        
        let tasks = await Task.find({ userId: req.params.userId })
        return res.send(tasks)

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//READ BY Category

router.get('/getCategoryName/:userId/:categoryName', async (req, res) => {
    try {
        
        let tasks = await Task.find({ category: req.params.categoryName, userId: req.params.userId })
        return res.send(tasks)

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;
