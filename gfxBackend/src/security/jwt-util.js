import fs from "fs";

const createUploadsFolder = () => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log("Uploads folder created.");
    }
  };
  
  export { createUploadsFolder };import jwt from 'jsonwebtoken';
  import dotenv from 'dotenv';
  
  dotenv.config();
  
  const generateToken = (user) => {
    const payload = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin, // ✅ Ensure admin status is included
    };
  
    const options = {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d", // ✅ Default expiry if missing
    };
  
    return jwt.sign(payload, process.env.JWT_SECRET, options);
  };
  
  export { generateToken };
  