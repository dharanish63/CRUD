const mongoose =require('mongoose')

const schema = new mongoose.Schema({

name:String,
desc:String
})
module.exports=mongoose.model('books',schema);