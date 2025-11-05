// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     userName: String,
//     userEmail: String,
//     password: String,
//     role: String
// });


// module.exports = mongoose.model('User',userSchema)

const mongoose  = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {String, required:true},
    email: {String, required:true, unique:true},
    password: {String, required:true},
    role: {String, default:'user'}
})

module.exports = mongoose.model('User', userSchema)
