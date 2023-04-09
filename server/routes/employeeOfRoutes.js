const express = require('express');
const router = express.Router();

const employeesOfController = require('../controllers/employeesOfController');

router.route('/')
    .post(employeesOfController.getEmployeeInfo)

    
module.exports = router;