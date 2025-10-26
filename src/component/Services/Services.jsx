import React from 'react';
import './Services.css'
import {FaCode, FaMobileAlt} from "react-icons/fa";

const Services = () => {

    const services = [
        {
            icon: <FaCode />,
            title: "Web Development",
            desc: "Building responsive and visually appealing user interfaces using React and modern web technologies.",
        },
        {
            icon: <FaMobileAlt />,
            title: "App Development",
            desc: "Creating cross-platform mobile apps with Flutter and Dart for seamless user experiences.",
        },
    ];

    return (
        <div className="services" id="services">
            <h1 className="services-title">My Services</h1>

            <div className="services-list">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;