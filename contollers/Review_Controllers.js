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
    Book.findById(req.params.id)
    .then((book)=>{
        book.reviews = []
        book.save().then(
            (b)=>{
                res.status(200).json(b)
            }
        )
    })
    .catch(next)

}

const getreviewbyId = (req,res,next) => {
    Book.findById(req.params.id).then((book)=>{
        the_review = book.reviews.find((item)=> item._id ==req.params.reviewid) 
        res.json(the_review)
    })
    .catch(next)

}

const editreviewbyId = (req,res,next) => {
    Book.findById(req.params.id).then((book)=>{
     let updates_reviews = book.reviews.map((item)=>{
        if(item.id ==  req.params.reviewid){
            item.body = req.body.body
            
        }
        return item
     })
     book.reviews = updates_reviews
     book.save().then(b => res.json(b.reviews))
    

    })
    .catch(next)
    
}

const deletereviewbyId = (req,res,next) => {

     Book.findById(req.params.id).then((book)=>{
     let updates_reviews = book.reviews.filter((item)=>{
        return item.id !=  req.params.reviewid
      
     })

     book.reviews = updates_reviews
     book.save().then(b => res.json(b.reviews))
    

    })
    .catch(next)
}



module.exports = {
    getAllReviews,
    createReview,
    deleteReview,
    getreviewbyId,
    editreviewbyId,
    deletereviewbyId
}