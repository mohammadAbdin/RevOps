import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const uri = MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    db = client.db("users");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

export async function closeDbConnection() {
  await client.close();
  console.log("MongoDB connection closed.");
}
export const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export const getDb = () => mongoose.connection.db;
export { db };
