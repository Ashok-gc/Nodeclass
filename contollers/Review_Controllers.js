const Book = require("../models/Book");

const getAllReviews = (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => {
      res.json(book.reviews);
    })
    .catch(next);
};

const createReview = (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.reviews.push(req.body);
      book.save().then((newbook) => {
        res.json(newbook.reviews).status(201);
      });
    })
    .catch(next);
};

const deleteReview = (req, res, next) => {
  Book.findById(req.params.id)
    then((book) => {
        book.reviews=[]
        book.save()
            .then(b => res.json(b.reviews))
    }).catch(next);
    
};

const getReviewByID = (req, res,next)=>{
    Book.findById(req,parms.id)
        .then(book=>{
            let review = book.reviews
                .find((item)=> item.id == req.parms.review_id)
            res.json(review)
        }).catch(next)
}

const updateReviewByID = (req, res,next)=>{
    Book.findById(req.params.id)
        .then(book =>{
            book.reviews.map((item)=>{
                if(item.id == req.parms.review_id){
                    item.body = req.body.body
                }
                return item
            })
            book.reviews = updateReviews
            book.save().then(b=>res.json(b.reviews))

        }).catch(next)
}

const deleteReviewByID = (req, res,next)=>{
    Book.findById(req.params.id)
        .then(book=>{
            let updatedReviews=book.reviews
                .filter((item)=> item.id != req.params.review_id)
            book.reviews =updateReviews
            book.save().then(b=> res.json(b.reviews))
        }).catch(next)
}


module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  getReviewByID,
  updateReviewByID,
  deleteReviewByID
};
