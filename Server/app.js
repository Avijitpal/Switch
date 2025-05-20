const express = require("express");
const { createConnection } = require("net");
const app = express();
const port = 3000;
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../FrontEnd')))
app.use(express.json());

const mongoose = require('mongoose');
const monDbURL = "mongodb+srv://avijit:Avijitpal%401@database.dlwecr7.mongodb.net/?retryWrites=true&w=majority&appName=Database"

mongoose.connect(monDbURL).then(()=>{
   console.log("Db is connected Succesfully")
}).catch(err=>{
    console.log("Unable to connnet to the DB",err);
}) 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        require:true
    }
})

const user = mongoose.model('USER',userSchema);

const validation = function(req, res, next){
   const name = req.body.name;
   const password = req.body.password

   if(typeof name === 'string'){
    next();
   }
   else{
    res.status(400).json("Sorry put the valid type")
   }
}
app.post("/submit",validation, async (req,res)=>{
   //Now putting the data into the data base;
         const {name, password} = req.body;
   try{
    const exsistingUser = await user.findOne({name:name});
        if(exsistingUser){
            return res.status(409).json("The username is already taken")
        }
  
        const newUser = new user({
    name,
    password
   })
   await newUser.save();
   console.log("Data  is saved ", newUser.name);
   res.status(201).json({message: "user is registerd", user:newUser})
   }
   catch(error){
    console.error("There is some issue While saving the data")

    res.status(500).json('Error while saving the data')
   }
})

app.listen(port,()=>{
    console.log("The server is up and running")
})