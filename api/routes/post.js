import express from "express";
import { getPosts, createPost, updatePost } from "../controlers/post.js";
const postRouter = express.Router();
postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:id").patch(updatePost);
export default postRouter;
