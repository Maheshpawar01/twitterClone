import express from "express";
import { Login, Register, bookmark, follow, getMyProgfile, getOtherUsers, logout, unfollow } from "../controllers/UserController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router()

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getMyProgfile);
router.route("/otherUser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

export default router;