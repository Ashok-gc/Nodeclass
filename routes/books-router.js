const express =  require("express")
const router = express.Router()

const bookController = require('../controllers/books-controller')
router.route("/")
    .get(bookController.getAllBooks)
    .post(bookController.postnewbooks)
    .put(bookController.putbook)
    .delete(bookController.deletebooks)
module.exports = router

router.route('/:id')
    .get(bookController.getonebook)
    .post(bookController.postonebook)
    .put(bookController.putbook)
    .delete(bookController.deletebooks)