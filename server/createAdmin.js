
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

async function createOrResetAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password || password.length < 12) {
      throw new Error("Set ADMIN_EMAIL and a password of at least 12 characters in .env");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.findOneAndUpdate(
      { email },
      {
        $set: {
          name: "Store Admin",
          email,
          password: hashedPassword,
        },
      },
      { upsert: true, new: true, runValidators: true }
    );

    console.log("Admin account created or password reset successfully.");
    console.log("Admin email:", email);
  } catch (error) {
    console.error("Admin setup failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createOrResetAdmin();
