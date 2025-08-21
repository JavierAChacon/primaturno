import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import errorHandling from "./middlewares/errorHandling.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", serviceRoutes);

app.use(errorHandling);

app.listen(PORT, async () => {
  try {
    const client = await pool.connect();
    client.release();
    console.log(`Server listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});
