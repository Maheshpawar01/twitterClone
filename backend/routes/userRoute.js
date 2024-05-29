import express from "express";
import { Login, Register, bookmark, logout } from "../controllers/UserController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router()

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);

export default router;