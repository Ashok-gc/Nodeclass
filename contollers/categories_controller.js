const Category = require('../models/Category')


const getAllCategories = (req,res,next)=>{
    Category.find().then((Category)=>{
        res.json(Category)
    }).catch(
        (err)=>{
            next(err)
        }
    )
}

const createCategory = (req,res,next)=>{

}

const deleteCategory = (req,res,next)=>{
    Category.deleteMany()
    .then((reply)=>{
        res.json({"reply": "category deleted"})
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getCategorybyId = (req,res,next)=>{

}

const updateCategorybyId = (req,res,next)=>{

}

const deleteCategorybyId = (req,res,next)=>{

}

module.exports={getAllCategories,createCategory,deleteCategory,getCategorybyId,updateCategorybyId,deleteCategorybyId}