const Joi = require('joi');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const {User} = require('../models/user')

router.post('/', async(req, res) => {
    try {
        const {error} = validateLogin(req.body);
        if (error) 
            return res.status(400).send(error);
        
        let user = await User.findOne({email: req.body.email});
        if (!user) 
            return res.status(400).send('Invalid email or password.');
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) 
            return res.status(400).send('Invalid email or password.')

        const token = user.generateAuthToken();

        return res
            .header('x-auth-token', token)
            .header('access-control-expose-headers', 'x-auth-token')
            .send({_id: user._id, name: user.name, email: user.email, token: token});
    } catch (ex) {
        console.log(ex)
        return res
            .status(500)
            .send(`Internal Server Error: ${ex}`);
    }
});

function validateLogin(req) {

    const schema = Joi.object({
        email: Joi
            .string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: Joi
            .string()
            .min(5)
            .max(1024)
            .required()
    });
    return schema.validate(req);
}

module.exports = router;