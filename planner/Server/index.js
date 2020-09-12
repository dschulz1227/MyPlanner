var cors = require("cors");
const express = require('express');
const connectDB = require('./startup/db');
const app = express();
const tasks = require('./routes/tasks');
const users = require('./routes/users');

connectDB();




app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasks);
app.use('/api/users', users);
app.use(express.urlencoded({extended: true}));

app.listen(5000, function () {
    console.log("Server started. Listening on port 5000.");
});

