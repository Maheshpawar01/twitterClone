import express from "express";
import { Login, Register, logout } from "../controllers/UserController.js";

const router = express.Router()

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(logout);

export default router;