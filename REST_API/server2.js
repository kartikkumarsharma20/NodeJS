const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/username");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Connection Failed");
    process.exit(1);
  }
};
connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

let UsernameSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
const UsernameModel = mongoose.model("username", UsernameSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        let { username, email, password } = req.body;
        let data = await UsernameModel.create({
            username,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: data
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Failed to register user",
            error: error.message
        });

    }
});
app.get("/get", async (req,res)=>{
  let data = await UsernameModel.find()
  console.log(data)
  res.send(data)

})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
