const mongoose = require('mongoose');
// const Joi = require('joi');

const taskSchema = new mongoose.Schema({
        title: {type: String, required: false},
        category:  {type: String},
        content: {type: String, required: true, minlength: 5, maxlength: 300},
        dateAdded: {type: Date, required: true , default: Date},
        // completed: {type: Boolean, default: false},
        completionDate: {type: Date, default: null},
        // deleted: {type: Boolean, default: false},
        userId:{type:String, requred:true},
        isComplete:{type: Boolean}
    }
);


const Task = mongoose.model('Task', taskSchema);


// function validateTask(task) {
//     const schema = Joi.object({
//         title: Joi.string().required(),
//         category: Joi.string().required(),
//         content: Joi.string().required(),
//         dateAdded: Joi.date(),
//         // completed: Joi.Boolean(),
//         completionDate: Joi.Boolean(),
//         // deleted: Joi.boolean(),
//         dateDeleted: Joi.date()

//     });
//     return schema.validate(task);
// }


exports.Task = Task;
// exports.validateTask = validateTask;
exports.taskSchema = taskSchema;


