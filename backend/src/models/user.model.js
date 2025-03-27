// Import the Mongoose library to work with MongoDB
import mongoose from "mongoose";

// Define a schema for the User model
const userSchema = new mongoose.Schema(
  {
    // User's email - required and must be unique
    email: {
      type: String,
      required: true,
      unique: true,
    },

    // User's full name - required
    fullName: {
      type: String,
      required: true,
    },

    // User's password - required with a minimum length
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // Optional profile picture URL - defaults to an empty string if not provided
    profilePic: {
      type: String,
      default: "", // ✅ fixed typo from 'defualt'
    },
  },

  // Automatically add createdAt and updatedAt timestamps
  { timestamps: true }
);

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

// Export the User model so it can be used in other files
export default User;
