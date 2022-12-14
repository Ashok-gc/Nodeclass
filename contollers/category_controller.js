const category = require("../models/Category")
const Category =  require("../models/Category")

 const getallcategory = ((req,res,next)=>{
    Category.find().then((category)=>{
        res.json(category)
    })
    .catch(next)

 })

 const postnewcategory = ((req,res,next)=>{
   

    Category.create(req.body).then((category)=>{
        res.json(category)
    })
    .catch(next)

 })

const deletecategory = ((req,res,next)=>{
    category.deleteMany().then((reply)=>{
        res.json(reply)
    })
    .catch(next)
})

const getcategorybyId = ((req,res,next)=>{
    Category.findById(req.params.category_id).then((category)=>{
        res.json(category)
    }).catch(next)

})

const editcategorybyId = ((req,res,next)=>{
    Category.findByIdAndUpdate(req.params.category_id,{$set : req.body},{new:true})
    .then((category)=>{
        res.json(category)

    })
    .catch(next)

})

const deletecategorybyId =((req,res,next)=>{
    Category.findByIdAndRemove(req.params.category_id).then((reply)=>{
        res.json(reply)
    })
    .catch(
        next
    )
})

 module.exports = {getallcategory,postnewcategory,deletecategory,getcategorybyId,editcategorybyId,deletecategorybyId}