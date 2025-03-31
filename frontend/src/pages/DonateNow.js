import React, { useState } from "react";
import "../styles/donate.css"; // Create this CSS file for styling

const DonateNow = () => {
    const [donor, setDonor] = useState({
        name: "",
        bloodGroup: "",
        age: "",
        contact: "",
        city: ""
    });

    const handleChange = (e) => {
        setDonor({ ...donor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donor Data Submitted:", donor);
        alert("Thank you for registering as a blood donor!");
    };

    return (
        <div className="donate-container">
            <h2>Register as a Blood Donor 🩸</h2>
            <p>Your donation can save lives. Fill out the form to register.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
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
                <input type="number" name="age" placeholder="Age" min="18" max="65" onChange={handleChange} required />
                <input type="tel" name="contact" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" onChange={handleChange} required />
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default DonateNow;
