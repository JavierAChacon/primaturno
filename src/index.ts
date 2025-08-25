import express from "express";
import dotenv from "dotenv";
import serviceRoutes from "./routes/serviceRoutes.js";
import errorHandling from "./middlewares/errorHandling.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", toNodeHandler(auth));

app.use(express.json());

// app.use("/api", serviceRoutes);

app.use(errorHandling);

app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
