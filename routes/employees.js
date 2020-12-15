const express = require('express');
const employeesController = require('../controllers/employees');
const router = express.Router();

router.get('/', employeesController.getEmployees);
router.get('/employee/:id', employeesController.getEmployeesById);
router.get('/firstname/:first_name', employeesController.getEmployeesByFirstName);
router.get('/employeesalaries', employeesController.getEmployeeSalaries)
router.get('/employeedepartments', employeesController.getEmployeeDepartments)
router.get('/employeeall', employeesController.getEmployeeAll)


module.exports = router;