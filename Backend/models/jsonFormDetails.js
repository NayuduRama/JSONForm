const Joi = require('joi');
const mongoose = require('mongoose'); 
const Jwt = require('jsonwebtoken');
const config = require('config'); 

const jsonSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    jsonform: {
        type: Object, 
        minlength: 5,
        maxlength: 50
    }
     
});


jsonSchema.methods.generateAuthToken = function () {
    const token = Jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey')); 
    return token;
}; 

const JsonDetails = mongoose.model('JsonDetails', jsonSchema);
function validateJson(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        // jsonform: Joi.string().min(3).max(50).required(), 
    };
    return Joi.validate(user, schema);
}

exports.JsonDetails = JsonDetails;
exports.validateJson = validateJson;