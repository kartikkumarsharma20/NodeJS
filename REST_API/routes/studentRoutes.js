const express = require("express");
const router = express.Router();
const { createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require("../controller/studentController");

router.post("/create",createStudent);
router.get("/get",getAllStudents);
router.get("/get/:id",getStudent);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);

module.exports = router;