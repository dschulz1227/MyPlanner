const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
        userId:{type:String, requred:true},
        title: {type: String, required: false},
        category:  {type: String},
        content: {type: String, required: true, minlength: 5, maxlength: 300},
        dateAdded: {type: String, required: true },
        completionDate: {type: String, default: null}
        
    }
);


const Task = mongoose.model('Task', taskSchema);


function validateTask(task) {
    const schema = Joi.object({
        userId: Joi.string().required(),
        title: Joi.string().required(),
        category: Joi.string().required(),
        content: Joi.string().required(),
        dateAdded: Joi.string(),
        completionDate: Joi.string()
    });
    return schema.validate(task);
}


exports.Task = Task;
exports.validateTask = validateTask;
exports.taskSchema = taskSchema;


