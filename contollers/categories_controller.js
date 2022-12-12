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
    Category.findById(req.params.category_id).then((category)=>{
        res.json(category)
    }).catch(next)
}

const editCategorybyId = (req,res,next)=>{
    Category.findByIdAndUpdate(req.params.category_id,{$set : req.body},{new:true})
    .then((category)=>{
        res.json(category)

    })
    .catch(next)
}

const deleteCategorybyId = (req,res,next)=>{
    Category.findByIdAndRemove(req.params.category_id).then((reply)=>{
        res.json(reply)
    })
    .catch(
        next
    )
}

module.exports={getAllCategories,postnewCategory,deleteCategory,getCategorybyId,editCategorybyId,deleteCategorybyId}