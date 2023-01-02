const express = require('express')
const Profile = require('../models/Profile')
const upload = require('../middleware/upload')

const router = express.Router()

router.route('/')
    .get((req,res,next)=>{
        Profile.find()
            .then(profiles =>{
                res.json(profiles)
            }).catch(next)
            

    })
    .post(upload.single('profile'),(req,res,next)=>{
        console.log(req.file)
        console.log(req.body)
        res.send('whatever')
    })

module.exports=router