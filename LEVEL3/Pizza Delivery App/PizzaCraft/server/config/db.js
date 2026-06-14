import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("MESSAGE:", error.message);
    console.log("NAME:", error.name);

    process.exit(1);
  }
};

export default connectDB;