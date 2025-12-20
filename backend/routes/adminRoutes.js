// adminRoutes.js
import express from "express";
import admincontroller from "../controllers/admincontroller.js";
const router = express.Router();

// your routes here
router.post("/bookingcreate", admincontroller.createBooking);

export default router;  // <-- this makes the default export
