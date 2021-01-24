const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/books');
// /*---------- Public Routes ----------*/
router.post('/search', booksCtrl.create);
router.get('/', booksCtrl.index)


/*---------- Protected Routes ----------*/




module.exports = router;