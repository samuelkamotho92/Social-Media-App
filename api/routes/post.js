import express from "express";
import {
  getPosts,
  createPost,
  updatePosts,
  deletePost,
} from "../controlers/post.js";
const postRouter = express.Router();
postRouter.route("/getposts").post(getPosts);
postRouter.route("/createpost").post(createPost);
postRouter.route("/:id").put(updatePosts);
postRouter.route("/deletePost/:id").post(deletePost);
export default postRouter;
