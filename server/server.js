// imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import accountRoute from "./routes/account.route.js";

// middleware
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use("/api", accountRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is live on http://localhost:${PORT}`);
})