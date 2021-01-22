const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/books');
const multer = require('multer');
const upload = multer();
// /*---------- Public Routes ----------*/
router.post('/', booksCtrl.create);
router.get('/', booksCtrl.index)


/*---------- Protected Routes ----------*/




module.exports = router;