const { hash } = require('bcryptjs')
const express = require('express')
const User = require('../models/User')

const router = express.Router()
router.post('/register',(req,res,next)=>{
    User.findOne({username: req.body.username})
        .then(user=>{
            if(user != null){
                let err=new Error(`User ${req.body.username} already exists`)
                return next(new Error())

            }
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err) return next(err)
                let user = new User()
                user.username = req.body.username
                user.save().then()
            })
        })
})

router.post('/login',(req,res,next)=>{
    res.send("login required")
})


module.exports =  router