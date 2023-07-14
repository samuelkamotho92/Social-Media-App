import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import storyRouter from "./routes/stories.js";
import cors from "cors";
import postRouter from "./routes/post.js";
import relationshipRouter from "./routes/relationship.js";
import cookieParser from "cookie-parser";
dotenv.config({ path: "./.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/setcookie", (req, res) => {
  res.cookie(`Cookie token name`, `encrypted cookie string Value`);
  res.send("Cookie have been saved successfully");
});
// app.get("/", (req, res) => {

// });
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/stories", storyRouter);
app.use("/relationships", relationshipRouter);
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
