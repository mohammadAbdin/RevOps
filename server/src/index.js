import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import adimnRoutes from "./routes/adminRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import { connectDB } from "./utils/mongoUtil.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:3006"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || origin.includes("netlify.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
connectDB();

app.use("/LogIn", authRoutes);
app.use("/Project", projectsRoutes);
app.use("/Admin", adimnRoutes);
app.use("/file", fileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
