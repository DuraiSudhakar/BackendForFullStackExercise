import 'dotenv/config'
import express, { json } from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/tasksRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoutes);

app.use("/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("connected");
  app.listen(process.env.PORT, () => {
      console.log("sever running");
  });
}).catch((e) => {
    console.log("connection failed"+e);
  });
