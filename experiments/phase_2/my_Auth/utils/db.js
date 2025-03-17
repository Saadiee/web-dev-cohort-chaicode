import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongourl = process.env.CLUSTER_URL

export default function db() {
    return mongoose.connect(mongourl)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => {
        console.error("❌ Failed to connect to MongoDB", err);
    });
}
