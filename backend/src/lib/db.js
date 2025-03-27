// Import the Mongoose library to connect to MongoDB
import mongoose from "mongoose";

// Define and export an async function to connect to the database
export const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from the .env file
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    // If successful, log the host name of the connected database
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error, log a message along with the error details
    console.log("MongoDB connection error:", error);
  }
};
