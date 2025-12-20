import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

// 🔥 Connect MongoDB
connectDB();

const app = express();

// ✅ Dynamic CORS (LOCAL + LIVE)
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", adminRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
