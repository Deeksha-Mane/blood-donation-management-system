const API_URL = "http://localhost:5000"; // Adjust if needed

export async function getDonors() {
    try {
        const response = await fetch(`${API_URL}/donors`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching donors:", error);
        return [];
    }
}

export async function registerDonor(donorData) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donorData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error registering donor:", error);
        return { error: "Failed to register donor" };
    }
}
