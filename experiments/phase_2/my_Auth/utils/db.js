import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function db() {
    return mongoose.connect(process.env.CLUSTER_URL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => {
        console.error("❌ Failed to connect to MongoDB", err);
        process.exit(1); // Stop the app if DB connection fails
    });
}
