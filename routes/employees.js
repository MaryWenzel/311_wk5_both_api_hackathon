const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/')
router.get('/:id')
router.get('firstname/:first_name')

module.exports = router