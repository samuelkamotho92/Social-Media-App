import express from "express";
import { register, loginUser } from "../controlers/auth.js";
const authRouter = express.Router();

authRouter.route("/login").post(loginUser);

authRouter.route("/register").post(register);

export default authRouter;
