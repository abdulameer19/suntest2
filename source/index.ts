import express, { Request, Response } from "express";
import { json } from "body-parser";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db";

import dataRoute from "./routes/dataRoute";

const app = express();
dotenv.config();
connectDB();
app.use(json());

app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 5, // Limit each IP to 5 requests per window
    message: "You exceeded 5 requests in 1 minute limit!",
    headers: true,
  })
);

app.get("/api/user", (req: Request, res: Response) => {
  res.status(200).send("Hello");
});

app.use("", dataRoute);

//Port Listening Code Port Running on 5050
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

module.exports = app.listen(3000);
