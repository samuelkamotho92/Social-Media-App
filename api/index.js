import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
dotenv.config({ path: "./.env" });
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("my social media app");
});
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
