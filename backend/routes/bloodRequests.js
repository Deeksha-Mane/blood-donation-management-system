const express = require("express");
const router = express.Router();
const BloodRequest = require("../models/BloodRequest");

// Create a new blood request
router.post("/", async (req, res) => {
    try {
        const newRequest = new BloodRequest(req.body);
        await newRequest.save();
        res.status(201).json({ message: "Blood request submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error submitting request", error });
    }
});

// Fetch all blood requests
router.get("/", async (req, res) => {
    try {
        const requests = await BloodRequest.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blood requests", error });
    }
});


module.exports = router;
