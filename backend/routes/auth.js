const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Use env variable

// **SIGNUP**
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log("📝 Signup Request Received:", { name, email, password });

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("❌ User already exists:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        console.log("🔑 Plain Password Before Hashing:", password);
        
        // ✅ Generate Salt & Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        console.log("🔐 Hashed Password After Hashing:", hashedPassword);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("✅ User successfully stored in DB:", newUser);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("🚨 Signup Error:", error);
        res.status(500).json({ error: error.message });
    }
});


// **LOGIN**
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🔍 Login Attempt:", { email, password });

        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ User not found!");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        console.log("✅ User found:", user);

        // ✅ Compare password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);

        console.log("🔑 Entered Password:", password);
        console.log("🔒 Stored Hashed Password:", user.password);
        console.log("🔍 Password Match Result:", isMatch);

        if (!isMatch) {
            console.log("❌ Password does NOT match");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // ✅ Generate token on successful login
        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

        res.cookie("token", token, { httpOnly: true }).json({ message: "Login successful", token });
    } catch (error) {
        console.error("🔥 Error during login:", error);
        res.status(500).json({ error: error.message });
    }
});

// **LOGOUT**
router.get("/logout", (req, res) => {
    res.clearCookie("token").json({ message: "Logged out" });
});

module.exports = router;
