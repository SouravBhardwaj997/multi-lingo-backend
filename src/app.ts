import express from "express";
import "dotenv/config";

import authRoutes from "./routes/auth.route";
const app = express();

app.use("/api/auth", authRoutes);

export default app;
