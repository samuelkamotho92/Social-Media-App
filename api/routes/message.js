import express from "express";
import { createMessage, getMessage } from "../controlers/Message.js";
const messageRouter = express.Router();
messageRouter.route("/").post(createMessage);
messageRouter.route("/:chatId").get(getMessage);
export default messageRouter;
