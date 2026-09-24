const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    firstName:{required: true, type: String},
    lastName:{required: true, type: String}, 
    age: {type: Number, required: true},
    email: {type: String, required:true, unique:true},
    phone:{type:Number, required:true},
    password: {type: String, required:true},
    gender: {enum:["female", "male"], required: true},
    verificationStatus:{type: Boolean, required: true, default: false},
})

const userModel = mongoose.model("users", userSchema );

module.exports = userModel;



// Assignments

// 1. Find how to add limit to user first name and last name CharacterData
// 2. timestamp see the activities of userSchema
// 3. all character to lowercase