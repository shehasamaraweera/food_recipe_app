const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDb = async () => {
  try {
    console.log("Trying to connect to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
    console.log("Connection state:", mongoose.connection.readyState);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectDb;
