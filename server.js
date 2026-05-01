import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/connect.js";
import habitRoutes from "./routes/habitRoutes.js"
import habitLogsRoutes from "./routes/habitLogsRoutes.js"
import { checkJwt } from "./middleware/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Add a root route so the health check or browser visit shows it's working
app.get("/", (req, res) => {
    res.send("Habit Tracker Backend is running!");
});

// Await DB connection BEFORE listening so it crashes early if DB fails
await connectDB();

app.use('/api/habits', checkJwt, habitRoutes)
app.use('/api/habit-logs', checkJwt, habitLogsRoutes)

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`)
})