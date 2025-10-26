import React from "react";
import "./ProjectPreview.css";

const ProjectPreview = () => {
    const projects = [
        {
            title: "Spring of Hope Assisted Living",
            url: "https://www.springofhope.co/",
            description:
                "A modern residential care service website for older adults and people with disabilities.",
        },
        {
            title: "Upcoming Project",
            url: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
            description: "A new project currently under construction. Stay tuned!",
        },
    ];

    return (
        <section className="project-section">
            <h2 className="project-title">Project Showcase</h2>
            <p className="project-subtitle">
                A look at what I’ve built and what’s coming next.
            </p>

            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        {project.url ? (
                            <iframe
                                src={project.url}
                                title={project.title}
                                className="project-iframe"
                                loading="lazy"
                            ></iframe>
                        ) : (
                            <img
                                src={project.url}
                                alt="Under Construction"
                                className="project-image"
                            />
                        )}
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectPreview;
