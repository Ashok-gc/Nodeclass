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
        // console.log(req.file)
        // console.log(req.body)

        let profile= {
            ...req.body,
            image: req.file.filename,
            user: req.user.userId
        }
        // res.send('whatever')
        Profile.create(profile)
        .then(profile=>{
            res.status(201).json(profile)
        }).catch(next)
    })

module.exports=router