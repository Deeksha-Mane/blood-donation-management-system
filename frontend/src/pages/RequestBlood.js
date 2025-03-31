import React, { useState } from "react";

const RequestBlood = () => {
    const [formData, setFormData] = useState({
        name: "",
        bloodGroup: "",
        contact: "",
        city: "",
        reason: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/api/request-blood", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            alert(data.message); // Show success or error message
        } catch (error) {
            console.error("Error submitting blood request:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <h2>Request Blood</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required />
                <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" onChange={handleChange} required />
                <input type="text" name="reason" placeholder="Reason for Request" onChange={handleChange} required />
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default RequestBlood;
