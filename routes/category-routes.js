const express = require("express")
const router = express.Router()

router.root('/')
    .get()
    .post()
    .put((req,res)=> res.status(501).json({"reply":"Not Implemented"}))
    .delete()

router.route('/:category_id')
    .get()
    .post((req,res)=> res.status(501).json({"reply":"Not Implemented"}))
    .put()
    .delete()


module.exports=router