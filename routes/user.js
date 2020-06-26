const express = require('express');

const userControllers = require('../controllers/user');

const router = express.Router();

router.post('/register', userControllers.register);

router.get('/login', userControllers.getLogin);

router.post('/login', userControllers.postLogin);

module.exports = router;
