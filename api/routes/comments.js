import express from "express";
import {
  createComment,
  getComments,
  updateComment,
} from "../controlers/comments.js";
const commentRouter = express.Router();
commentRouter.route("/").post(createComment);
commentRouter.route("/:id").get(getComments).put(updateComment);
export default commentRouter;
