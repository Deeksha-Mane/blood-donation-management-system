import "./Donors.css"; // Import CSS
import React, { useEffect, useState } from "react";
import { getDonors } from "../api";

const Donors = () => {
    const [donors, setDonors] = useState([]);
    const [search, setSearch] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await getDonors();
            setDonors(data);
        }
        fetchData();
    }, []);

    const filteredDonors = donors.filter(donor => 
        donor.name.toLowerCase().includes(search.toLowerCase()) &&
        (bloodGroup === "" || donor.bloodGroup === bloodGroup)
    );
 
    return (
        <div>
            <h1>Registered Donors</h1>
            
            {/* Search & Filter Inputs */}
            <input 
                type="text" 
                placeholder="Search by Name..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                <option value="">All Blood Groups</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>

            {/* Donors Table */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDonors.length > 0 ? (
                        filteredDonors.map(donor => (
                            <tr key={donor._id}>
                                <td>{donor.name}</td>
                                <td>{donor.bloodGroup}</td>
                                <td>{donor.age}</td>
                                <td>{donor.contact}</td>
                                <td>{donor.city}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No donors found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Donors;
