import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 
import nodemon from "nodemon"; 
import dotenv from "dotenv";
import userRouter from './routes/user.js';
import experienceRouter from './routes/experience.js'

dotenv.config()
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors()); 
// app.use(logger);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI; 
if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in .env")
}
 mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

/**
 * Sub-routers for our main router, we should have one sub-router per "entity" in the application
 */
const Routes = (app) => {
  // Root URL
  app.get("/", (req, res) => {
    res.send({message: 'Nothing to see on this page'}).status(200);
  });

  app.use('/api/user', logger, userRouter)
  app.use('/api/experience', experienceRouter)
}
Routes(app)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
