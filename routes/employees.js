const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('firstname/:first_name', controller.getByFirstName);

module.exports = router;