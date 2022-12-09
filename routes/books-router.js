
const express =  require("express")
const router = express.Router()

const bookController = require('../contollers/books_controller')
const reviewController = require("../contollers/Review_Controllers")
router.route("/")
    .get(bookController.getAllBooks)
    .post(bookController.postnewbooks)
    .put(bookController.putbook)
    .delete(bookController.deletebooks)


router.route('/:id')
    .get(bookController.getonebook)
    .post(bookController.postonebook)
    .delete(bookController.deletebook)
    .put(bookController.putonebook)
    
router.route('/:id/reviews')
    .get(reviewController.getAllReviews)
    .post(reviewController.createReview)
    .put((req,res )=>{
    res.status(501).json({"reply": "Method not supported"})})
    .delete(reviewController.deleteReview)


router.route('/:id/reviews/:id')
    .get(reviewController.getAllReviews)
    .post((req,res)=> res.status(501).json({"reply": "Not implemented"}))
    .put(reviewController.createReview)
    .delete()

module.exports = router