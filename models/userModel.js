const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const userSchema = mongoose.Schema(
    {
        username :{
            type:String,
            required : [true, 'please add the user name'],

        },
        email: {
            type:String,
            required : [true, 'please add the user email'],
            unique: [true, 'this email is already used']
        },
        password : {
            type:String,
            required : [true, 'please add the user password'],
        },
    },
    {
        timestamps : true,
    }
);

module.exports =   mongoose.model("userModel",userSchema);