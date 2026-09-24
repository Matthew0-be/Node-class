const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
    id: {required: true, type: Number},
    firstName: {required: true, type: String, trim: true},
    lastName: {required: true, type: String},
    email: {required: true, type: String, unique: true},
    role:{required: true, type: String},
    password:{required: true, type: Number}
})

const teacherModel = mongoose.model("users", userSchema);

module.exports = teacherModel;