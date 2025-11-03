import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "../backend/config/db.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
