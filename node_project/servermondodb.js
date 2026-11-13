const express = require("express")
const app = express()
const mongoose = require("mongoose")


let connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/FSD12")
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("Connection Failed")
        process.exit(1) // Exit the process with an error code
    }
}
connectDB()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(3000,()=>{
    console.log("Server is Running on Port : 3000")
}   )