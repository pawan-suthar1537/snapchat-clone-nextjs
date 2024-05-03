import mongoose, { Connection } from "mongoose";

let isconnect: Connection | boolean = false;

const connectDB = async () => {
  if (isconnect) {
    console.log("Already Connected");
    return isconnect;
  }
  try {
    const res = await mongoose.connect("mongodb+srv://ting33497:ting33497@cluster0.sul6e8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected");
    isconnect = res.connection;
    return isconnect;
  } catch (error: any) {
    console.log(error.message);
    // Exit process with failure
    throw error;
  }
};


export default connectDB;