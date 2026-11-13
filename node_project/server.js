const express=require('express')

const app = express()
const mongoose=require('mongoose')
const PORT = 3000

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
let studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    contact: Number
})
let Student = mongoose.model('Student', studentSchema)
app.use(express.json())

let createStudent = async (req,res) => {
let data = await Student.create(req.body)
res.json({ 
    "success": true,
    "message": "Student created successfully" ,
    data
})
}
let getStudent = async (req,res) => {
    let data = await Student.find()
    res.json({  
        "success": true,
        "message": "Students retrieved successfully",
        data
    })
}
let getStudentById = async (req,res) => {
    let data = await Student.findById(req.params.id)
    res.json({  
        "success": true,
        "message": "Student retrieved successfully",
        data
    })
}
let updateStudent = async (req,res) => {
    let data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({  
        "success": true,
        "message": "Student updated successfully",
        data
    })
}
let deleteStudent = async (req,res) => {
    let data = await Student.findByIdAndDelete(req.params.id)
    res.json({  
        "success": true,
        "message": "Student deleted successfully",
        data
    })
}

app.post('/student/create', createStudent)
app.get('/student/get', getStudent)
app.get('/student/get/:id', getStudentById)
app.put('/student/update/:id', updateStudent)
app.delete('/student/delete/:id', deleteStudent)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
