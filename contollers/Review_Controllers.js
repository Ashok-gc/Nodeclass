const Book = require('../models/Book')


const getAllReviews = (req,res,next) =>{
    Book.findById(req.params.id)
    .then((book)=>{
        res.json(book.reviews)
    })
    .catch(next)

}

const createReview = (req,res,next) =>{
    Book.findById(req.params.id)
    .then((book)=>{
        
        book.reviews.push(req.body)
       book.save().then(
       (newbook)=>{
        res.json(newbook.reviews).status(201)
       }
       )
       
    })
    .catch(next)

}

const deleteReview = (req,res,next) =>{

}

module.exports = {
    getAllReviews,
    createReview,
    deleteReview
}