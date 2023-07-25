import express from "express";
import {
  getAllUsers,
  getOneUser,
  updateUser,
  suggestedUsers,
} from "../controlers/user.js";
const userRouter = express.Router();

userRouter.route("/").get(getAllUsers);

userRouter.route("/:id").get(getOneUser).put(updateUser);
userRouter.route("/suggested/:userId").get(suggestedUsers);
export default userRouter;
