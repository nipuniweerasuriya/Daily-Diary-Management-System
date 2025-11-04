// backend/config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error("MONGO_URI is not set. Check your backend/.env or process environment.");
      process.exit(1);
    }

    const maskedUri = mongoUri.replace(/:\/\/.+?:.+?@/, '://***:***@');
    console.log(`🔍 Connecting to MongoDB: ${maskedUri}`);

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
