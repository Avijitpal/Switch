const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const validation = (req, res, next)=>{
  const name = req.body.name;
  const surname = req.body.surname;
  if(name !==  "Avijit" && surname !==  "Pal"){
     return res.status(400).json("The input is not valid")
  }
  else{
    return res.status(200).json("The data is valid")
    next()
  }
  
}  
app.get("/", (req,res)=>{
   res.send("Hello World")
})

app.post("/checkData",validation, (req, res)=>{
    res.send("Data reading is done")
})

app.listen(port, ()=>{
  console.log("The sever is up and running")
})