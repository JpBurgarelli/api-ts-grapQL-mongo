import mongoose from "mongoose";
import { env } from '../env';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
