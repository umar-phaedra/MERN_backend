const studentRepo=require('../repo/student_repo');


const getAllStudent=async(req,res)=>{
    const students=await studentRepo.getAllStudent()
    res.status(200).json(students)
}

const createStudent=async(req,res)=>{
 const name=req.body?.name
 const rollNo=req.body?.rollNo
    const student=await studentRepo.createStudent(name,rollNo)
    res.status(200).json(student)
}
const deleteStudent=async(req,res)=>{
    const id=req.params.studentId

    const isExist=await studentRepo.getStudentById(id)

    if (!isExist) return res.status(404).json({message:"Student not found"})
    const student=await studentRepo.deleteStudent(id)
    res.status(200).json(student)
}

const updateStudent=async(req,res)=>{
    const id=req.params.studentId
    const { rollNo } = req.body

    const isExist = await studentRepo.updateStudent(id)
    if (!isExist) return res.status(404).json({ message: "Student not found" })

    const student = await studentRepo.updateStudent(id, rollNo)
    res.status(200).json({ message: "Student updated succssfully", student })
}
module.exports={
    getAllStudent,
    createStudent,
    deleteStudent,
    updateStudent
}