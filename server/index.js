import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user-router.js";
import postRouter from "./routers/post-router.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(5000, () =>
      console.log("Server is running on http://localhost:5000")
    )
  )
  .catch((err) => console.log(err));
