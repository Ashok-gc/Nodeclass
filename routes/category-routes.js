const express =  require('express')
const router = express.Router()
const categorycontroller =  require("../contollers/category_controller")

router.route('/')
.get(categorycontroller.getallcategory)
.post(categorycontroller.postnewcategory)
.put((req,res)=>{res.status(501).json({"Reply": "Not Implemented"})})
.delete(categorycontroller.deletecategory)

router.route('/:category_id')
.get(categorycontroller.getcategorybyId)
.post((req,res)=>{res.status(501).json({"Reply": "Not Implemented"})})
.put(categorycontroller.editcategorybyId)
.delete(categorycontroller.deletecategorybyId)

module.exports =  router