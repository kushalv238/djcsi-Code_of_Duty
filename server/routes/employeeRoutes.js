const express = require('express');
const router = express.Router();

const multer = require('multer');

const employeesController = require('../controllers/employeesController');

router.route('/')
    .get(employeesController.getAEmployee)
    .post(employeesController.createNewEmployee)
    .patch(employeesController.updateEmployee)

    
module.exports = router;