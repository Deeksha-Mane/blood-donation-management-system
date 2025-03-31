import React, { useState } from "react";
import "../styles/finddonor.css"; // Create this CSS file for styling

const FindDonor = () => {
    const [request, setRequest] = useState({
        patientName: "",
        bloodGroup: "",
        urgency: "",
        hospital: "",
        contact: ""
    });

    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blood Request Submitted:", request);
        alert("Your request has been submitted. We will connect you with available donors.");
    };

    return (
        <div className="find-donor-container">
            <h2>Request Blood Now 🚑</h2>
            <p>Fill out the form to find a donor in your area.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="patientName" placeholder="Patient Name" onChange={handleChange} required />
                <select name="bloodGroup" onChange={handleChange} required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
                <select name="urgency" onChange={handleChange} required>
                    <option value="">Select Urgency Level</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Within 24 Hours">Within 24 Hours</option>
                    <option value="Within 3 Days">Within 3 Days</option>
                </select>
                <input type="text" name="hospital" placeholder="Hospital Name & Address" onChange={handleChange} required />
                <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} required />
                <button type="submit" className="btn">Request Blood</button>
            </form>
        </div>
    );
};

export default FindDonor;
