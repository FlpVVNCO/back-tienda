import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.route.js'
import productRoutes from "./routes/product.routes.js";
import imageRoutes from './routes/image.routes.js'

const app = express();

// averiguar como manejar los cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", productRoutes);
app.use("/api", imageRoutes);
app.use('/api/uploads',express.static('uploads'))

export default app;

