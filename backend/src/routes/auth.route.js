// Import the Express framework
import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js"

// Create a new router instance
const router = express.Router();

/**
 * @route   GET /signup
 * @desc    Signup page placeholder
 * @access  Public
 */
router.get("/signup",signup);

/**
 * @route   GET /login
 * @desc    Login page placeholder
 * @access  Public
 */
router.get("/login", login);

/**
 * @route   GET /logout
 * @desc    Logout page placeholder
 * @access  Public
 */
router.get("/logout", logout);

// Export the router so it can be used in other files
export default router;
