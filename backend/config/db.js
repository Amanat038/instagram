import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amanatsingh:amanat2002@cluster0.p3lptp9.mongodb.net/instagramClone?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

export default connectDB;
