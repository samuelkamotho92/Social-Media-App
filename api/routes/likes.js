import express from "express";
import { createLikes, getLikes } from "../controlers/likes.js";
const likesRouter = express.Router();
likesRouter.route("/").post(createLikes);
likesRouter.route("/:id").get(getLikes);
export default likesRouter;
