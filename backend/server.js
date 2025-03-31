const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Allow frontend access
app.use(cookieParser());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/blood_donation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB Connected Successfully");
});

mongoose.connection.on("error", (err) => {
    console.error("🚨 MongoDB Connection Error:", err);
});

// Donor Schema
const donorSchema = new mongoose.Schema({
    name: String,
    bloodGroup: String,
    age: Number,
    contact: String,
    city: String
});
const Donor = mongoose.model("Donor", donorSchema);

// API Routes
app.post("/register", async (req, res) => {
    try {
        const newDonor = new Donor(req.body);
        await newDonor.save();
        res.status(201).json({ message: "Donor registered successfully" });
    } catch (error) {
        console.error("Error saving donor:", error);
        res.status(500).json({ error: "Failed to register donor" });
    }
});

app.get("/donors", async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json(donors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch donors" });
    }
});

// **AUTHENTICATION ROUTES**
const authRoutes = require("./routes/auth"); // Import authentication routes
app.use("/api/auth", authRoutes);  // Use auth routes

// **BLOOD REQUEST ROUTES**
const bloodRequestRoutes = require("./routes/bloodRequests");
app.use("/api/blood-requests", bloodRequestRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

async function testPassword() {
    const password = "deeksha";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("🔐 Hashed Password:", hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("✅ Password Match Test Result:", isMatch);
}

testPassword();
