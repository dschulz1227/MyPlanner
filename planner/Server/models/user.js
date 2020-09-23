const mongoose = require('mongoose');

// const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 15},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 5, maxlength: 12}
   
});



const User = mongoose.model('User', userSchema);


// function validateUser(user) {
//     const schema = Joi.object({
//         name: Joi.string().required(),
//         email: Joi.string().required(),
//         password: Joi.string().required().min(6),
//         timeStamp: Joi.date(),
        // profileImage: Joi.string(),
        //tasks: Joi.object()
//     });
//     return schema.validate(user);
// }


exports.User = User;
// exports.validateUser = validateUser;