const express = require('express');
const router = express.Router(); 
const { JsonDetails, validateJson } = require('../models/jsonFormDetails');
const _ = require('lodash');
const bcrypt = require('bcrypt'); 
 
router.get('/', async(req, res) => {
    try{
        const jsons = await JsonDetails.find();
        res.send(jsons);
    }
    catch(err){
        console.log('Error while getting customer data', err);
    }
});

router.post('/', async(req, res) => {
    try{
        // const result =  validateJson(req.body);
        // if(result.error) return res.status(400).send(result.error.details[0].message);
        // let json = await JsonDetails.findOne({name: req.body.name}); 
        // if(json) return res.status(400).status(`User already registered with given email: ${req.body.email}`);
        let json;
        json = new JsonDetails(_.pick(req.body, ['name', 'jsonform']));
        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(user.password, salt);
        await json.save();
        // const token = Jwt.sign({_id: user._id}, config.get('jwtPrivateKey')); 
        // const token = user.generateAuthToken();
        res.send(_.pick(json, ['_id', 'name', 'jsonform']));
    }catch(error){
        console.log("Error", error);
    }
})

module.exports = router;