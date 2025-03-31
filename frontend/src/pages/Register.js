import React, { useState } from "react";
import { registerDonor } from "../api";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        bloodGroup: "",
        age: "",
        contact: "",
        city: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerDonor(formData);
        if (response.message) {
            alert("✅ Donor registered successfully!");
            setFormData({ name: "", bloodGroup: "", age: "", contact: "", city: "" });
        } else {
            alert("❌ Failed to register donor!");
        }
    };

    return (
        <div className="container">
            <h1>📝 Register as a Blood Donor</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
                <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
