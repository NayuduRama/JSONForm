const express = require('express');
const router = express.Router(); 
const { User, validateUser } = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt'); 

router.get('/me', async(req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);

});
router.get('/', async(req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch(err){
        console.log('Error while getting customer data', err);
    }
});

router.post('/', async(req, res) => {
    try{
        const result =  validateUser(req.body);
        if(result.error) return res.status(400).send(result.error.details[0].message);
        let user = await User.findOne({email: req.body.email});
        if(user) return res.status(400).status(`User already registered with given email: ${req.body.email}`);
        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        // const token = Jwt.sign({_id: user._id}, config.get('jwtPrivateKey')); 
        // const token = user.generateAuthToken();
        res.send(_.pick(user, ['_id', 'name', 'email']));
    }catch(error){
        console.log("Error", error);
    }
})

module.exports = router;