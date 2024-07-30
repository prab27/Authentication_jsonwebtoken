const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Register User
router.post(
    '/register',
    [
        check('username', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    ],
    authController.registerUser
);

// Login User
router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    authController.loginUser
);

// Password Reset Request
router.post(
    '/reset-password-request',
    [
        check('email', 'Please include a valid email').isEmail(),
    ],
    authController.resetPasswordRequest
);

// Password Reset
router.post(
    '/reset-password/:token',
    [
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    ],
    authController.resetPassword
);

module.exports = router;
