//  const date_fns =  require("date-fns")
// const uuid  =  require("uuid")

// let id=  (uuid.v4())

// const { Console } = require('console')
// const os = require('os')
// const path = require('path')
// const  fs = require('fs')
// const fspromises = require('fs').promises

// const prompt = require('prompt-sync')();

// const data = prompt('Write a message ? ');

// const fileOperation = async()=>{

//     try{
//      await fs.promises.writeFile('./log.txt',"message \t id \t \t \t \t \t \t \t \t   date and time")
//      await fspromises.appendFile('./log.txt','\n'+data)
//      await fspromises.appendFile('./log.txt','\t'+uuid.v4())
//      await fspromises.appendFile('./log.txt','\t '+date_fns.format(new Date(),'yyyy/MM/dd \t HH:mm:ss'))

//     console.log(data)
//     }
//     catch (err){
//         console.error(err)

//     }

// }

// fileOperation()

require('dotenv').config()
const express = require("express");
const logger = require("./looger");
const app = express();
const path = require("path");
const port = 3000;
const book_routes = require("./routes/books-router");
const category_routes = require("./routes/category-routes");
const user_routes = require("./routes/user-routes")
const books = require("./data/books");
const auth =require('./middleware/auth')
const mongoose = require("mongoose");

const router = require("./routes/books-router");

mongoose.set('strictQuery', false);

mongoose
  .connect("mongodb://127.0.0.1:27017/books")
  .then(() => {
    console.log("connected to mongodb server");
  })
  .catch((err) => next(err));

app.use((req, res, next) => {
  next();
});

app.use(express.json());

app.get("^/$|/index(.html)?", (req, res) => {
  // res.send("hello World")
  res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.use('/user', user_routes)
app.use(auth.verifyUser)

app.use("/books", book_routes);
app.use("/category", category_routes);

app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});


router.post('/register',(req, res,next)=>{

})


router.post('/login',(req, res,next)=>{
  res.send("login request")
})


//error handiling
app.use((err, req, res, next) => {
  console.log(err.stack)
  if(res.statusCode ==200) res.status(500)
  res.json({"msg":err.message})
});
module.exports=router