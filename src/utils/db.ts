import mongoose from "mongoose";
import { logger } from "./logger";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "";

export const connectDB = async () => {
  try {
    console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);

    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
