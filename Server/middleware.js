const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())


const validation = (req, res , next)=>{
  const {name, surname} = req.body;
  if(name != "Avijit" && surname != "pal"){
    return res.status(400).json({message:"Invalid input: Name is not valid"})
  }
  next()
}


app.get("/",(req,res)=>{
    res.send("Hello")
})
    app.post("/check", validation, (req,res)=>{
         return res.status(200).json({message:"input valid"})
    })
app.listen(port,()=>{
    console.log("The server is up and running")
})