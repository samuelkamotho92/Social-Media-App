import express from "express";
import { searchUser } from "../controlers/user.js";
import { verifyToken } from "../Middleware/authmiddleware.js";
const chatRouter = express.Router();
chatRouter.route("/user/").post(verifyToken, searchUser);
export default chatRouter;
