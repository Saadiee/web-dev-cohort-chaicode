import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
// import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.BASE_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Home Route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Home Page</h1>`);
});

//user routes
app.use('/api/v1/users', userRoutes)





db().then(() => {
  app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error("❌ Database connection failed", err);
});