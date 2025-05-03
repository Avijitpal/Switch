const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const validate =  function validate(req,res,next) {
  const name = req.body.name;
  const surname = req.body.surname;

  if(name ==="Avijit" && surname==="Pal"){
    res.status(200).send("The input is valid")
    next() // here we are going back to the app.post giving back the handle. 
  }
  else{
    res.status(400).send("The input os invalid")
  }
}

app.post("/data", validate , (req,res)=>{
   console.log("The data is Read.")
  
})

app.listen(port, ()=>{
  console .log("The server is up and Runnig")
})