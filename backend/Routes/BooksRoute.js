const express = require("express")

const router = express.Router()

const {PostLatestBooks,PostAllBooks} = require("../Controllers/BooksControllers")


router.route('/Books/latest').post(PostLatestBooks)
router.route('/Books/Bookss').post(PostAllBooks)

module.exports = router