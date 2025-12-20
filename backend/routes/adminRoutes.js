import express from "express";
import admincontroller from "../controllers/admincontroller.js";

const router = express.Router();

// POST booking
router.post("/bookingcreate", admincontroller.createBooking);

export default router;
