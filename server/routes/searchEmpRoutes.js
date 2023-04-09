const express = require('express');
const router = express.Router();

const searchEmpController = require('../controllers/searchEmpController');

router.route('/')
    .post(searchEmpController.getSearchRes)

    
module.exports = router;