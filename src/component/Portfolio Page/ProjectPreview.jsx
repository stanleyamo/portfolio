import React, { useState, useEffect } from "react";
import "./ProjectPreview.css";

const projects = [
    {
        name: "Spring of Hope",
        link: "https://www.springofhope.co/",
        description:
            "Responsive non-profit site with event updates, donations, and outreach.",
        images: [
            "/images/soh/soh1.png",
            "/images/soh/soh2.png",
            "/images/soh/soh3.png",
            "/images/soh/soh4.png",
            "/images/soh/soh5.png",
        ],
    },
    {
        name: "Up Coming Project",
        link: "https://www.figma.com/design/zfk2nQqVPKUNObVmHOrrrr/Referral-UI-UX?node-id=0-1&t=rTzCvVVQMUSjFHxP-1",
        description:
            "A modern website for a nursing school with course info, news, and admissions.",
        images: [
            "/images/app/img1.png",
            "/images/app/img2.png",
            "/images/app/img3.png",
            "/images/app/img4.png",
            "/images/app/img5.png",
        ],
    },
];

// ✅ Reusable modal
function Modal({ message, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose} className="close-btn">
                    OK
                </button>
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const [current, setCurrent] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (project.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % project.images.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [project.images.length]);

    const handleVisitClick = (e) => {
        if (!project.link || project.link === "#") {
            e.preventDefault();
            setShowModal(true);
        }
    };

    return (
        <div className="project-card">
            <img
                src={project.images[current]}
                alt={project.name}
                className="project-image"
            />
            <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleVisitClick}
                    className="visit-btn"
                >
                    Visit Site
                </a>
            </div>

            {showModal && (
                <Modal
                    message="This project link is not available yet."
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default function ProjectPreview() {
    return (
        <section className="project-section">
            <h2 className="project-title">Project Showcase</h2>
            <p className="project-subtitle">
                A look at what I’ve built and what’s coming next.
            </p>

            <div className="project-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}
