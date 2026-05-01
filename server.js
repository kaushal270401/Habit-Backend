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

connectDB();

app.use('/api/habits', checkJwt, habitRoutes)
app.use('/api/habit-logs', checkJwt, habitLogsRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})