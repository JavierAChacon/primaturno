import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  try {
    const client = await pool.connect();
    client.release();
    console.log(`Server listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});
