import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <section className="contact-section">
                <div className="contact-container">
                    {/* Left Side */}
                    <div className="contact-left">
                        <h1>Let’s talk</h1>
                        <p>
                            I’m currently available to take on new projects, so feel free to send me a
                            message about anything you want me to work on. You can contact me anytime.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <MdEmail className="contact-icon" />
                                <p>stanleyamobrown3@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <MdPhone className="contact-icon" />
                                <p>+233 500 631 685</p>
                            </div>
                            <div className="contact-detail">
                                <MdLocationOn className="contact-icon" />
                                <p>Accra, Ghana</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="contact-right">
                        <form className="contact-form">
                            <label>Your Email</label>
                            <input type="email" placeholder="Enter your email" required />

                            <label>Write your message here</label>
                            <textarea placeholder="Enter your message" rows="5" required></textarea>

                            <button type="submit" className="submit-btn">
                                Submit now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-left">
                        <h2>
                            Stan<span>ley.</span>
                        </h2>
                        <p>
                            I am a software developer from Ghana with experience building responsive,
                            modern web applications , mobile apps and portfolio sites.
                        </p>
                    </div>

                    <div className="footer-subscribe">
                        <input type="email" placeholder="Enter your email" />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Stanley Amo-Brown. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Connect with me</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
