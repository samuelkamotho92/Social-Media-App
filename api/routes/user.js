import express from "express";
import { getAllUsers, getOneUser } from "../controlers/user.js";
const userRouter = express.Router();

userRouter.route("/").get(getAllUsers);

userRouter.route("/:id").get(getOneUser);

export default userRouter;
