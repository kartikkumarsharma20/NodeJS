const express = require("express");
const router = express.Router();
const { createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require("../controller/studentController");

router.post("/create",createStudent);
router.get("/get",getAllStudents);
router.get("/get/:id",getStudent);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);

// router.route('/')
// .post(createStudent)
// .get(getAllStudents)

// router.route("/:id")
// .get(getStudent)
// .put(updateStudent)
// .delete(deleteStudent)

module.exports = router;