const express = require('express');
const router = express.Router();
const wantToReadsCtrl = require('../../controllers/wantToReads')

router.post('/posts/:id/wantToReads', wantToReadsCtrl.create)
router.delete('/wantToReads/:id', wantToReadsCtrl.deleteWantToRead)






module.exports = router;