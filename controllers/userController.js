const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require( 'jsonwebtoken' )

const registerUser = asyncHandler(async (req,res) =>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("Please provide username, email and password");
    }
    const userAvailable = await userModel.findOne({email: email});
    if(userAvailable){
        res.status(400);
        throw new Error('User Already registered!')
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log('hashed password ==> ',hashedPassword);
    const user = await  userModel.create({
        username,
         email,
          password : hashedPassword
    })
    if(user){
        res.status(201).json({_id:user.id, email:user.email, message:"User created successfully"})
    } else {
        res.status(400);
        throw new Error("user data us not valid")
    }
    res.json({message :"register the user"})
} )







const loginUser = asyncHandler(async (req,res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("all fields are mandatory !")
    }
    const user = await  userModel.findOne({email:email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user : {
                id : user.id,
                username: user.username,
                email : user.email,
            },
        },
        process.env.ACCESS_TOKEN_SECRECT,
        {expiresIn:'1m'},
    );
        res.status(200).json({accessToken})
    }else {
        res.status(401)
        throw new Error ('email & password not valid')
    }
    res.json({message : 'login user'})
} )








const currentUser = asyncHandler(async (req,res) =>{
    res.json({message : 'current user infrmations'})
} )

module.exports= {registerUser, loginUser , currentUser};