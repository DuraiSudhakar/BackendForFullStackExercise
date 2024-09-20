import express from "express";
import {
    getTasks,
    postTasks,
    updateTask,
    delTask,
} from "../controller/taskController.js";
import { middelware } from "../middleware.js";

const taskRoutes = express.Router();

taskRoutes.use(middelware)

taskRoutes.get("/", getTasks);

taskRoutes.post("/", postTasks);

taskRoutes.put("/:id", updateTask);

taskRoutes.delete("/:id", delTask);

export default taskRoutes;
