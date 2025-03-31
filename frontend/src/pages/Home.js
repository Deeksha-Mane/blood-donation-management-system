import "../styles/home.css";
import React, { useEffect, useState } from "react";
import { getDonors } from "../api";

import BloodDonationImg from "../assets/img1.jpg";
import EmergencyImg from "../assets/img4.jpg";
import TrackingImg from "../assets/img8.png";

import BlogImg1 from "../assets/img2.jpg";  
import BlogImg2 from "../assets/img3.jpg";  
import BlogImg3 from "../assets/img5.jpg"; 

import male from "../assets/male-person.png"; 
import female from "../assets/female-person.png";

// import FAQ from "./FAQ";
// import Footer from "./Footer";

// ✅ Hero Section
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Donate Blood, Save Lives ❤️</h1>
                <p>Every drop counts. Your donation can make a difference in someone's life.</p>
                <div className="hero-buttons">
                <button className="btn donate-btn" onClick={() => window.location.href = "/register"}>
                        Donate Now
                    </button>

                    {/* Redirect to View Donors Page */}
                    <button className="btn find-donor-btn" onClick={() => window.location.href = "/donors"}>
                        Find a Donor
                    </button>
                </div>
            </div>
        </section>
    );
};

// ✅ Services Section
const Services = () => {
    return (
        <section className="services-section" id="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service-card">
                    <img src={BloodDonationImg} alt="Blood Donation"/>
                    <h3>Blood Donation</h3>
                    <p>We connect donors with those in need and ensure safe blood transfusions.</p>
                </div>
                <div className="service-card">
                    <img src={EmergencyImg} alt="Emergency Blood Request" />
                    <h3>Emergency Blood Request</h3>
                    <p>Need blood urgently? We help you find the nearest donor quickly.</p>
                </div>
                <div className="service-card">
                    <img src={TrackingImg} alt="Donor Location Tracking" />
                    <h3>Donor Location Tracking</h3>
                    <p>Find donors in your area using our real-time tracking system.</p>
                </div>
            </div>
        </section>
    );
};

// ✅ Blood Information Section
const BloodInfoSection = () => {
    return (
        <section className="blood-info-section">
            <h2>Blood Information</h2>
            <p>Learn about different blood groups and their compatibility for donation.</p>
            <div className="blood-group-info">
                <div className="blood-group-card">
                    <h3>A+</h3>
                    <p>Can donate to A+ and AB+. Can receive from A+, A-, O+, O-.</p>
                </div>
                <div className="blood-group-card">
                    <h3>A-</h3>
                    <p> Can donate to A+, A-, AB+, AB-. Can receive from A- and O-.</p>
                </div>
                <div className="blood-group-card">
                    <h3>B+</h3>
                    <p>Can donate to B+ and AB+. Can receive from B+, B-, O+, O-.</p>
                </div>
                <div className="blood-group-card">
                    <h3>B-</h3>
                    <p>Can donate to B+, B-, AB+, AB-. Can receive from B- and O-.</p>
                </div>
                <div className="blood-group-card">
                    <h3>AB+</h3>
                    <p>Universal recipient. Can receive from all blood groups but can donate only to AB+.</p>
                </div>
                <div className="blood-group-card">
                    <h3>AB-</h3>
                    <p>Can donate to AB+ and AB-. Can receive from A-, B-, AB-, and O-.</p>
                </div>
                <div className="blood-group-card">
                    <h3>O+</h3>
                    <p>O+ individuals can donate to O+, A+, B+, and AB+ but can receive blood only from O+ and O-.</p>
                </div>
                <div className="blood-group-card">
                    <h3>O-</h3>
                    <p>Universal donor. Can donate to all blood groups but can receive only from O-.</p>
                </div>
            </div>
        </section>
    );
};

// ✅ Blogs Section
const BlogsSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            // Fetch or set blogs here (mock data for now)
            const blogData = [
                {
                    title: "The Importance of Regular Blood Donation",
                    summary: "Discover why regular blood donation is vital for saving lives and maintaining health.",
                    image: BlogImg1,
                    url: "https://www.redcrossblood.org/local-homepage/news/article/blood-donation-importance.html",
                },
                {
                    title: "How to Prepare for Blood Donation",
                    summary: "Learn the steps to take before and after donating blood to ensure a safe experience.",
                    image: BlogImg2,
                    url: "https://www.redcrossblood.org/donate-blood/blood-donation-process/before-during-after.html",
                },
                {
                    title: "Understanding Blood Types and Compatibility",
                    summary: "A guide to blood types and how they impact transfusions and donations.",
                    image: BlogImg3,
                    url: "https://www.redcrossblood.org/donate-blood/blood-types.html",
                }
            ];
            setBlogs(blogData);
        }
        fetchBlogs();
    }, []);

    return (
        <section className="blogs-section" id="blogs">
            <h2>Related Blogs</h2>
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <div className="blog-content">
                            <h3>{blog.title}</h3>
                            <p>{blog.summary}</p>
                            <button 
                                className="btn read-more-btn" 
                                onClick={() => window.open(blog.url, "_blank", "noopener,noreferrer")}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ✅ Testimonials Section
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        async function fetchTestimonials() {
            // Mock data for now; can be replaced with API call
            const testimonialData = [
                {
                    name: "Aarav Sharma",
                    feedback: "Donating blood was a life-changing experience! The process was smooth, and I felt great knowing I helped someone.",
                    image: male,
                },
                {
                    name: "Neha Patel",
                    feedback: "I was able to find a donor for my father in an emergency. This platform is truly a lifesaver!",
                    image: female,
                },
                {
                    name: "Rahul Verma",
                    feedback: "A great initiative that makes blood donation easy and accessible for everyone. Highly recommended!",
                    image: male,
                },
            ];
            setTestimonials(testimonialData);
        }
        fetchTestimonials();
    }, []);

    return (
        <section className="testimonials-section">
            <h2>What Our Donors & Recipients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <div className="testimonial-content">
                            <h3>{testimonial.name}</h3>
                            <p>"{testimonial.feedback}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// ✅ Footer Section
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are dedicated to connecting blood donors with those in urgent need, making life-saving donations easy and accessible.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: support@blooddonation.com</p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Address: 123 Blood Drive, Kolhapur,India</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Blood Donation. All rights reserved.</p>
            </div>
        </footer>
    );
};

function Home() {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        async function fetchDonors() {
            const data = await getDonors();
            console.log("Fetched donors:", data);
            setDonors(data);
        }
        fetchDonors();
    }, []);

    return (
        <div className="home-container">
            <HeroSection />
            <Services />
            <BloodInfoSection />
            <BlogsSection />
            {/* <Campaigns /> */}
            <Testimonials />
            {/* <NewsUpdate /> */}
            {/* <FAQ /> */}

            {/* 🏥 Blood Donor List */}
            <div className="donor-list container">
                <h2>🏥 Blood Donor List</h2>
                <table>
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
                        {donors.length > 0 ? (
                            donors.map((donor, index) => (
                                <tr key={index}>
                                    <td>{donor.name}</td>
                                    <td>{donor.bloodGroup}</td>
                                    <td>{donor.age}</td>
                                    <td>{donor.contact}</td>
                                    <td>{donor.city}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>No donors found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    );
}

export default Home;