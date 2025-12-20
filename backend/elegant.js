// 1️⃣ Import packages
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";   
// 2️⃣ Load env variables
dotenv.config();

// 3️⃣ Connect database
connectDB();

// 4️⃣ Create app
const app = express();

app.use(cors({
  origin: "http://localhost:8080/",
}));

// 6️⃣ Parse JSON body (AFTER CORS, BEFORE ROUTES)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 7️⃣ API routes
app.use("/api", adminRoutes);

// 8️⃣ Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running 🚀" });
});

// 9️⃣ Error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// 🔟 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});