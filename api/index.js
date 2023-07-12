import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import cors from "cors";
import postRouter from "./routes/post.js";
dotenv.config({ path: "./.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("my social media app");
});
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postRouter);
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
