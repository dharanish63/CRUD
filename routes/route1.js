const express =require('express');
const control1= require('../controllers/controller1')
const router = express.Router();
//read
router.get('/books',control1.read)
//create
router.post('/books',control1.create)
//delete
router.delete('/books/:id',control1.del)
//update
router.put('/books/:id',control1.update)
module.exports = router;