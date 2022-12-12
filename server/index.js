const express =require("express");
const app=express();
const cors = require("cors");
app.listen(4000,()=>{
    console.log("Server Started on Port 4000");
})
app.use(cors({
    origin:["http://localhost:8000"],
    method:["GET","POST"],
    credentials: true, 
}));
app.use(express.json());