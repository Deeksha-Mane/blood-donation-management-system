import { useEffect, useState } from "react";

const RequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/blood-requests")
            .then((res) => res.json())
            .then((data) => setRequests(data))
            .catch((error) => console.error("Error fetching requests:", error));
    }, []);

    return (
        <div>
            <h2>Blood Requests</h2>
            <ul>
                {requests.map((req, index) => (
                    <li key={index}>
                        {req.name} needs {req.bloodGroup} blood in {req.location}. Contact: {req.contact}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestList;
