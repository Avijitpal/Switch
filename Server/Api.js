const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json())
const port = 3000;

mongoose.connect(
  "mongodb+srv://avijit:Avijitpal%401@database.dlwecr7.mongodb.net/?retryWrites=true&w=majority&appName=Database",
);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
  });

const All_Users =[
    {
        username:"Avijitpal@1",
        password:"1234"
    },
    {
        username:"Hello@2025",
        password:"2345"
    }
]


function userExists(username, password) {
    for (let i = 0; i < All_Users.length; i++) {
      if (All_Users[i].username === username && All_Users[i].password === password) {
        return true;
      }
    }
    return false;
  }
app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization?.split(" ")[1];;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(port,()=>{
    console.log("The server is Up and running on port "+ port)
});