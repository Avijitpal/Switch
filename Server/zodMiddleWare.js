const express = require("express");
const  app = express();
const port = 3000;
const {z, Schema} = require("zod"); // Here we are importing the library

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("Hi")
})
// const userSchema = z.object({
//     name :z.string().min(1,{message:"Name cannot be empty"}),
//     surname: z.string().min(1,{message:"Surname cannot  be empty"})
// }).superRefine((data, ctx)=>{
//     if(data.name !== "Avijit" || data.surname !== "Pal"){
//         ctx.addIssue({
//             code:z.ZodIssueCode.custom,
//             message:"Avijit Pal is should be",
//         })
//     }
// })

// const validation = function(req,res,next){
//     try{
//          userSchema.parse(req.body)
//          next();
//     }
//     catch(error){
//              return res.status(400).json({
//                 message:"Validation failed",
//                 errors:error.errors
//              })
//     }
// }

// // const validate = function(req,res,next){
// //     const name = req.body.name;
// //     const surname = req.body.surname;
// //     if(name === "Avijit" && surname === "Pal"){
// //       //return res.status(200).json("The data is valid");
// //       next(); 
// //     }
// //     else{
// //         return res.status(400).json("The data is Invalid")
// //     }
// // }

// app.post("/data",validation, (req,res)=>{
//     res.status(200).json("The data is valid");
//     console.log("The name and the surname is"+ " "+  req.body.name + req.body.surname )
// })




//////////////////facebook
function validate(obj){
    const Schema =  z.object({
        email:z.string().email(),
        password: z.string().min(8)
    })
}
const response = Schema.safeParse(obj);
console.log(response)
app.post("/login",(req,res)=>{
 const response = validate(req.body);
 if(!response.success){
    res.json({
        msg:"Inputs are valid"
    })
    return;
 }
})

app.listen(port,()=>{
    console.log("the server is up and running")
})