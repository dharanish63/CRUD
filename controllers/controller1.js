const book = require('../Model/model1')

const read = async(req,res)=>{
  try{
    const datar = await book
    .find();
  res.json(datar)}
  catch(err){
    res.json({message:err.message})
  }
 }

 const create =async(req,res)=>{
   
   const newBook = new book({
    name:req.body.name,
    desc:req.body.desc
  })
try{
  const data =await newBook.save();
  return res.status(201).json(data);
}
catch(err){
  return res.status(400).json({message:err.message})
}
 
 
 }

 const update = async(req,res)=>{
  try
  {
    const updatedone = await book.findOneAndUpdate({
    _id:req.params.id
  },{
    name:req.body.name,
    desc:req.body.desc
  },
  {
    new:true
  }
  )
  res.status(201).json(updatedone)
  }catch(err){
    req.json({
      message:req.err.message
    })
  }
 }
 const del = async(req,res)=>{
  const dataid = req.params.id;
  try{
     await book.deleteOne({_id:dataid});
     res.json({message:"Data Deleted"})
  } 
  catch(err){
    res.json({
      message:err.message
    })
  }  
 }
  
 module.exports ={
  read,create,update,del
 }