import express from "express"
import { createOrder, verifyPayment } from "../controllers/orderController.js";
import { enrollInFreeCourse } from "../controllers/enrollmentController.js";


let paymentRouter = express.Router()

paymentRouter.post("/create-order", createOrder);
paymentRouter.post("/verify-payment", verifyPayment);
paymentRouter.post("/enroll-free", enrollInFreeCourse);


export default paymentRouter