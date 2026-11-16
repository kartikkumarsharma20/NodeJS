const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const app = express();
connectDB();
/* ###ejs###
app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
  res.render('home',{username:"john"})
})
*/

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

//mounting routes
app.use('/student', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})