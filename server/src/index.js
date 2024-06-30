// server/src/index.js
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"; // Import cookie-parser

import authRoutes from "./routes/authRoutes.js";
import { connectToDatabase, connectDB } from "./utils/mongoUtil.js";

// Initialize dotenv
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
const corsOptions = {
  origin: "http://localhost:5174", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser()); // Use cookie-parser

app.use(morgan("dev"));
connectDB();
// Routes
app.use("/LogIn", authRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to RevOps backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
