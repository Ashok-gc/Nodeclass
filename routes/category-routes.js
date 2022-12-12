const express = require("express")
const router = express.Router()
const categorycontroller=require("../contollers/categories_controller")

router.root('/')
    .get(categorycontroller.getAllCategories)
    .post(categorycontroller.postnewCategory)
    .put((req,res)=> res.status(501).json({"reply":"Not Implemented"}))
    .delete(categorycontroller.deleteCategory)

router.route('/:category_id')
    .get(categorycontroller.getCategorybyId)
    .post((req,res)=> res.status(501).json({"reply":"Not Implemented"}))
    .put(categorycontroller.editCategorybyId)
    .delete(categorycontroller.deleteCategorybyId)


module.exports=router