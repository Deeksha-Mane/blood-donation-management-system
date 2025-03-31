const mongoose = require("mongoose");

const BloodRequestSchema = new mongoose.Schema({
    name: String,
    bloodGroup: String,
    location: String,
    contact: String,
    urgency: String, // "High", "Medium", "Low"
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BloodRequest", BloodRequestSchema);
