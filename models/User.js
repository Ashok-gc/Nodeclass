const mongoose  =  require('mongoose')

const userSchema =  mongoose.Schema({
    username : {
        type : String,
        required :  true,
        unique :  true,
        minLenght: [5, 'Username shoulb be longer than five character']
    },
    password : {
        type : String,
        required :  true
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    }

},{timestamps : true})

module.exports = mongoose.model("User",userSchema)