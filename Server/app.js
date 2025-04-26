const express = require("express")
const port = 3000;

const app =  express();
app.use(express.json()); // We need this to be able to read the data from the server.
app.get('/',(req,res)=>{
     res.send('Hello world')
})
app.post('/data', (req, res)=>{
      const data = req.body.name
      res.send("Hi it is working" +data)
})

app.listen(port,()=> {
      console.log("The server is runnig")
})