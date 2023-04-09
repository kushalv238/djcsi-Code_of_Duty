const Employee = require('../model/Employee');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


// @desc Get users
// @route GET /employee
// @access Private
const getAEmployee = asyncHandler(async (req, res) => {
    const { _id, first_name, aadhar_number, pan_number } = req.body;
    var getUser;

    if (_id) {
        getUser = await Employee.find({ _id }).lean().exec();
    }
    else if (first_name) {
        getUser = await Employee.find({ first_name }).lean().exec();
    } else if (aadhar_number) {
        getUser = await Employee.find({ aadhar_number }).lean().exec();
    } else {
        getUser = await Employee.find({ pan_number }).lean().exec();
    }

    // if(!getUser?.length) {
    //     return res.status(400).json({ message: 'No users found'} )
    // }

    res.json(getUser);
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage }).single('img')

// @desc Post a new employee
// @route POST /employee
// @access Private
const getEmployeeInfo = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    var getEmployee;

    if (_id) {
        getEmployee = await Employee.find({ _id });
    }
    else {
        return res.status(400).json({ message: "Enter userid" })
    }
    res.json(getEmployee);
    // const newEmployeeObject = { img: {data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), contentType: 'image/png'}, first_name, last_name, phone_number, current_address, resume , aadhar_number, pan_number, flags };

    // const addedEmployee = await Employee.create(newEmployeeObject)

    // if(addedEmployee) {
    //     res.status(200).json({ message: `${first_name} added to databse` })
    // } else {
    //     res.status(400).json({ message: "Invalid data recoreded." })
    // }
})



// @desc Deleting a employee
// @route DELETE /employee
// @access Private
const updateEmployee = asyncHandler(async (req, res) => {
    // const { username, id, title, text, completed } = req.body;

    // if(!id || !username || !title || !text) {
    //     return res.status(400).json({ message: "Enter all information" })
    // }

    // const userID = await User.findOne({ username }, { _id: true }).lean().exec();
    // if(!userID) {
    //     return res.status(400).json({ message: "No such user found" });
    // }

    // const noteToUpdate = await Note.findById(id).exec();
    // if(!noteToUpdate) {
    //     return res.status(400).json({ message: "No such note found" });
    // }

    // const findDuplicate = await Note.findOne({ title }).lean().exec();
    // if(findDuplicate && findDuplicate?._id.toString() !== id) {
    //     return res.status(409).json({ message: 'Duplicate note title' });
    // }

    // noteToUpdate.title = title;
    // noteToUpdate.text = text;
    // noteToUpdate.completed = completed;

    // const updatedNote = await noteToUpdate.save();

    // res.json({ message: `Note ${updatedNote.title} updated` });
})



// @desc Deleting a note
// @route DELETE /notes
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
    // const { username, title } = req.body;

    // if(!username || !title) {
    //     return res.status(400).json({ message: "Username & note title required" })
    // }

    // const userID = await User.findOne({ username }, { _id: true }).lean().exec();
    // if(!userID) {
    //     return res.status(400).json({ message: "No such user found" });
    // }

    // const noteToDelete = await Note.findOne({ user: userID, title }).exec();
    // if(!noteToDelete) {
    //     return res.status(400).json({ message: "User has no such note" });
    // }

    // const deletedNote = await noteToDelete.deleteOne();

    // res.json({ message: `${username}'s note ${deletedNote.title} deleted` });
})


module.exports = { getEmployeeInfo }