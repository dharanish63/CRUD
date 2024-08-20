const express = require('express');
const books=require('./routes/route1');
const app = express();
const port = 3000;

app.use(express.json());
const mongoose = require('mongoose');
const condb = async () =>{
  console.log("enters")
  try{
    await mongoose.connect('mongodb://localhost:27017/testb');
    console.log("connected sucessfully");
  }
  catch(err){
    console.log("err",err)
    console.log("not");
  }
}
condb();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the world' });
});
 app.use('/',books);
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
