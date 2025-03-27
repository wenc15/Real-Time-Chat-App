// Import the Express framework
import express from "express";

// Import dotenv to load environment variables from the .env file
import dotnev from "dotenv";
import {connectDB} from "./lib/db.js"
// Import the authentication-related routes from the 'auth.route.js' file
import authRoutes from "./routes/auth.route.js";

// Call the config method to load environment variables into process.env
dotnev.config();

// Create an instance of an Express application
const app = express();

// Get the PORT value from environment variables
const PORT = process.env.PORT;

// Mount the authRoutes at the path '/api/auth'
// Any route defined inside auth.route.js will now be accessible as /api/auth/<route>
app.use("/api/auth", authRoutes);

// Start the server and have it listen on the specified port
// Once the server starts successfully, log a message to the console
app.listen(PORT, () => {
    console.log("server is running PORT:"+ PORT);
    connectDB();
});


