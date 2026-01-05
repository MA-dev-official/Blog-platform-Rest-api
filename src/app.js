import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import corsOptions from "./config/cors.config.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import ApiError from "./utils/ApiError.js";

// Load environment variables
dotenv.config();

const app = express();

// Core middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running"
  });
});

// 404 handler
app.use((req, res, next) => {
  next(new ApiError(404, `Route not found ${req.originalUrl}`));
});

// Global error handler
app.use(errorMiddleware);

export default app;