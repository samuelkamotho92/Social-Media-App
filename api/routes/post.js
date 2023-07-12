import express from "express";
import { getPosts, createPost, updatePosts } from "../controlers/post.js";
const postRouter = express.Router();
postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:id").put(updatePosts);
export default postRouter;
