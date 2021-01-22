const express = require('express');
const router = express.Router();
const addToReadsCtrl = require('../../controllers/addToReads')

router.post('/posts/:id/addToReads', addToReadsCtrl.create)
router.delete('/addToReads/:id', addToReadsCtrl.deleteAddToRead)






module.exports = router;