import express from "express";
import {
  buycourse,
  coursedelete,
  createcourse,
  getcourse,
  getsinglecourse,
  updatecourse,
} from "../controller/coursecontroller.js";
import usermiddleware from "../middleware/usermidleware.js";
import adminmiddleware from "../middleware/adminmiddleware.js";
const courserouter = express.Router();

courserouter.post("/create", adminmiddleware, createcourse);
courserouter.put("/update/:courseId", adminmiddleware, updatecourse);
courserouter.delete("/delete/:courseId", adminmiddleware, coursedelete);
courserouter.get("/list", getcourse);
courserouter.get("/:courseId", getsinglecourse);
courserouter.post("/Buy/:courseId", usermiddleware, buycourse);

export default courserouter;
