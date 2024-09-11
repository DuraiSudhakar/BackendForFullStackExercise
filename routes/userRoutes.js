import express from "express";
import { userLogin, userSignUp } from "../controller/userController.js";

const route = express.Router();

route.post("/login", userLogin);

route.post("/signup", userSignUp);

export default route
