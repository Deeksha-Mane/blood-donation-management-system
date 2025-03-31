const bcrypt = require("bcryptjs");

async function testBcrypt() {
    const plainPassword = "deeksha";
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.log("🔐 Hashed Password:", hashedPassword);

    // Compare the correct password
    const isMatchCorrect = await bcrypt.compare("deeksha", hashedPassword);
    console.log("✅ Correct Password Match:", isMatchCorrect); // Should print: true

    // Compare the wrong password
    const isMatchWrong = await bcrypt.compare("wrongpassword", hashedPassword);
    console.log("❌ Wrong Password Match:", isMatchWrong); // Should print: false
}

testBcrypt();
