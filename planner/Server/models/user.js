const { taskSchema }  = require ('./task')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');



const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 15},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 5},
    tasks: {type: [taskSchema], default: [] }
    })
   
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id, name: this.name, email: this.email}, config.get('jwtSecret'));
   };

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required().min(6),
        timeStamp: Joi.date(),
        tasks: Joi.array().items(Joi.object())
        });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;