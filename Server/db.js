
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
const mongoose = require("mongoose");
//connecting to the data base
mongoose.connect(
  "mongodb+srv://avijit:Avijitpal%401@database.dlwecr7.mongodb.net/?retryWrites=true&w=majority&appName=Database",
);
//Creating the user schema
const User = mongoose.model('User',{ 
      name: String,
      password: String})
//Getting the data from the user
app.post("/signUp",async function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

//Precheck if the user exist or not
const exsistingUser = await User.findOne({email:username});
//if yes then send a message
if(exsistingUser){
    return res.status(400).send("Username is already there")
}
//or Create a 
const user = new User({
    name:name,
    email:username,
    password:password
})
await user.save();
res.json({
    "msg":"New User created"
})
})

app.listen(3000)




