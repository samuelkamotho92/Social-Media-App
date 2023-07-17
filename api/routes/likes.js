import express from "express";
import { createLikes, getLikes, deleteLikes } from "../controlers/likes.js";
const likesRouter = express.Router();
likesRouter.route("/").post(createLikes);
likesRouter.route("/:id").get(getLikes).post(deleteLikes);
export default likesRouter;
