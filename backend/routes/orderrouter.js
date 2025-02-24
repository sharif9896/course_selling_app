import express from "express";
import usermiddleware from "../middleware/usermidleware.js";
import { orderData } from "../controller/ordercontroller.js";

const router = express.Router();

router.post("/", usermiddleware, orderData);

export default router;
