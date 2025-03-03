import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./database/index.js";
import { authRouter,userRouter } from "./routes/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Corrected CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // 🔥 Specify allowed origins
    credentials: true, // ✅ Allow credentials (tokens/cookies)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json()); // Parses incoming JSON
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);


// Database Connection & Server Start
db()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Stop server if database connection fails
  });
