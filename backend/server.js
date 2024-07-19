import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.listen(PORT, () => console.log(`Server Started at http://localhost:${PORT}`))