const express = require("express");
const connectDB = require("./config/database"); 
const app = express();
const User = require("./models/user");

app.post("/signup",async (req,res,)=>
{
  const user = new User({
    firstName:"Pulkit",
    lastName:"",
    emailId:"pulkitxi.x@gmail.com",
    password:"Pulk@3044",
    age:26,
    gender:"Male",
  });
  
  try{
    await user.save();
    res.send("User Added Successfully");
  }
  catch(err){
    res.status(400).send("Error saving the user :"+err.messsage);
  }
});

connectDB()
.then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is running successfully on port 7777...");
    });
    
})
.catch((err)=>{
    console.error("Database cannot be connected!!"); 
});
