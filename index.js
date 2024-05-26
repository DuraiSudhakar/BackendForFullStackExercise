import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/tasks.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("connected"));

app.use("/tasks", taskRoutes);

mongoose.connect("mongodb+srv://TaskHandle:Ezio278@dummydb.ohoxd50.mongodb.net/todo?retryWrites=true&w=majority&appName=dummyDb")
.then(() => {
  console.log("connected");
  app.listen(3000,() => {
    console.log("sever running");
  });
}).catch(() => {
    console.log("connection failed");
  });
