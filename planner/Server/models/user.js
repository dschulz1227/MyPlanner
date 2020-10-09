const {taskSchema} = require('./task')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    occupation: {
        type: String,
        default: null
    },
    age: {
        type: Number,
        default: null
    },
    github: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    }
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    }, config.get('jwtSecret'));
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi
            .string()
            .required(),
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .required()
            .min(5),
        occupation: Joi.string(),
        age: Joi.number(),
        github: Joi.string(),
        bio: Joi.string(),
        timeStamp: Joi.date()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;