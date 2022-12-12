const Category = require('../models/Category')


const getAllCategories = (req,res,next)=>{
    Category.find().then((Category)=>{
        res.json(Category)
    }).catch(next)
}

const postnewCategory = (req,res,next)=>{
    Category.create(req.body).then((category)=>{
        res.json(category)
    })

}

const deleteCategory = (req,res,next)=>{
    Category.deleteMany()
    .then((reply)=>{
        res.json({"reply": "category deleted"})
    })
    .catch(next)
}

const getCategorybyId = (req,res,next)=>{
    

}

const updateCategorybyId = (req,res,next)=>{

}

const deleteCategorybyId = (req,res,next)=>{

}

module.exports={getAllCategories,postnewCategory,deleteCategory,getCategorybyId,updateCategorybyId,deleteCategorybyId}