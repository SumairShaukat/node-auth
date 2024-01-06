const { required } = require('joi')
const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({ 

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{ 
        type: String,
        required
    }
})

const User = mongoose.model('User', Userschema)

module.exports = User