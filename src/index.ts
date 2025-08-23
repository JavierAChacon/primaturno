import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import serviceRoutes from "./routes/serviceRoutes.js";
import errorHandling from "./middlewares/errorHandling.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", serviceRoutes);

app.use(errorHandling);

app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
