import React from "react";
import "../styles/About.css"; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <p className="about-intro">
        Welcome to <span className="highlight">LifeSaver Blood Donation System</span>!  
        We are on a mission to make blood donation simpler, faster, and more accessible for everyone.
        Every drop of blood can be a **lifeline**, and we are here to ensure that no one suffers due to a lack of donors.
      </p>

      <div className="about-section">
        <h2>🌍 Our Mission</h2>
        <p>
          Our goal is to create a **global community of donors and recipients**, ensuring that anyone in urgent need of blood can find a donor quickly.
          We believe in **saving lives through technology**, making blood donation hassle-free while encouraging people to become **lifesavers**.
        </p>
      </div>

      <div className="about-section">
        <h2>🚀 Why Choose Us?</h2>
        <p>We offer a **secure, fast, and user-friendly platform** that connects donors and recipients effortlessly.</p>
        <ul>
          <li>✔ **Real-Time Donor Availability:** Find the nearest donor instantly.</li>
          <li>✔ **Simple Registration Process:** Easy sign-up for donors.</li>
          <li>✔ **Emergency Blood Requests:** Quick response for critical cases.</li>
          <li>✔ **Safe & Verified Donors:** All donors go through a verification process.</li>
          <li>✔ **Community Support:** Join a network of like-minded people dedicated to saving lives.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>💉 The Need for Blood Donation</h2>
        <p>
          Every year, **millions of people** require blood due to accidents, surgeries, childbirth, and medical conditions such as cancer and anemia.
          However, due to a **lack of awareness and donors**, many struggle to find life-saving blood.
          By registering as a donor, you can make a **real difference**.
        </p>
      </div>

      <div className="about-section">
        <h2>📊 Our Impact</h2>
        <ul>
          <li>✔ Fast & Reliable Blood Requests </li>
          <li>✔ Awareness & Community Engagement</li>
          <li>✔ Raised awareness about the **importance of regular blood donation**.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🤝 Join Us</h2>
        <p>
          Become a part of our **life-saving mission** today! Whether you want to **donate blood**, **request blood**, or **spread awareness**, your support can change lives.
          Together, we can make sure that **no one suffers due to a shortage of blood**.
        </p>
        <button className="donate-button" onClick={() => window.location.href = "/register"}>Become a Donor</button>
      </div>

      <div className="about-section">
        <h2>📞 Get in Touch</h2>
        <p>
          Have questions or want to collaborate? Contact us at  
          <a href="mailto:support@blooddonation.com"> support@blooddonation.com</a> or call us at <strong>+91 98765 43210</strong>.
        </p>
      </div>
    </div>
  );
}

export default About;