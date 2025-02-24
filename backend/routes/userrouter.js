import express from "express";
import { login, logout, purchases, signup } from "../controller/usercontroller.js";
import usermiddleware from "../middleware/usermidleware.js";

const userrouter = express.Router();

userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.get('/logout', logout);
userrouter.get('/purchased',usermiddleware,purchases)

export default userrouter;
