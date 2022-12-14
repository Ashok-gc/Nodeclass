const express =  require('express')
const User = require("../models/User")
const router =  express.Router()
const bcrypt = require("bcryptjs")

router.post("/register", (req,res,next)=>{
    User.findOne({username : req.body.username})
    .then((user)=>{
        if(user != null){
            let err =  new Error(`user ${req.body.username} already exists`)
            return next(err)
        }
        else{
            bcrypt.hash(req.body.password, 10, (err,hash)=>{
                if(err){
                    return next(err)
                }else{
                    user = new User()
                    user.username =  req.body.username,
                    user.password =  hash
                    user.save().then((user)=>{
                        res.status(201).json({"reply" : "User Registered Sucessfully",
                        userId : user._id,
                        username : user.username
                    })
                    })
                }
            })
        }
    })
   .catch(next)

})

router.post("/login",(req,res,next)=>{
   
})

module.exports = router