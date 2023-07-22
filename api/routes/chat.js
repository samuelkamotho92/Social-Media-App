import express from "express";
import { searchUser } from "../controlers/user.js";
import { getChats, createChat, findChat } from "../controlers/chat.js";
import { verifyToken } from "../Middleware/authmiddleware.js";
const chatRouter = express.Router();
chatRouter.route("/").post(createChat);
chatRouter.route("/:userId").get(getChats);
chatRouter.route("/find/:firstId/:secondId").get(findChat);

chatRouter.route("/user/").post(verifyToken, searchUser);
export default chatRouter;
