const studnetModel = require("../model/student_model");

const getAllStudent = async () => {
    return await studnetModel.find({})
}
const getStudentById = async (studentId) => {

    return await studnetModel.findById(studentId);
}

const createStudent = async (name, rollNo) => {
    return await studnetModel.create({ name, rollNo })
}
const deleteStudent = async (_id) => {
    return await studnetModel.findOneAndDelete({ _id })
}

const updateStudent = async (id, rollNo) => {
    return await studnetModel.findByIdAndUpdate(id, { rollNo })
}

module.exports = {
    getAllStudent,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent
}