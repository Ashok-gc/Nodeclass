const { verifyUser } = require('../middleware/auth')
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
        let areview = {
           "body" : req.body.body,
           "user"  : req.user.userid
        }
        console.log(areview)
        book.reviews.push(areview)
       book.save().then(
       (newbook)=>{
        console.log(verifyUser._id)
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
         the_review = book.reviews.find((item)=> item._id ==req.params.reviewid)
       console.log(the_review)
            if(the_review.user == req.user.userid){
     let updates_reviews = book.reviews.map((item)=>{
        if(item.id ==  req.params.reviewid){
            item.body = req.body.body
            
        }
        return item
     })
     book.reviews = updates_reviews
     book.save().then(b => res.json(b.reviews))
        

}else{
    res.status(400).send({"reply" : "Cannot edit others review"})
}

})
    .catch(next)

}

const deletereviewbyId = (req,res,next) => {
    console.log(the_review)
     Book.findById(req.params.id).then((book)=>{
        the_review = book.reviews.find((item)=> item._id ==req.params.reviewid)
        if(the_review.user == req.user.userid){

        
     let updates_reviews = book.reviews.filter((item)=>{
        return item.id !=  req.params.reviewid
      
     })

     book.reviews = updates_reviews
     book.save().then(b => res.json(b.reviews))
    
    } else{
        res.status(400).send({"reply" : "Cannot edit others review"})
    }
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