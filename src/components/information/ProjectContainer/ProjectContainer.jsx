import { useState } from "react";
import styles from "./ProjectContainer.module.css";
import ProjectCard from "../../smallcomponents/Projects/ProjectCard";
import * as Images from "../../../assets/images";
import { ProjectProcessProvider } from "../../smallcomponents/Projects/ProjectProcessContext";

function ProjectContainer() {

    const [projects, setProjects] = useState([
    { 
        id: "001", 
        name: "Livria", 
        terminated: false, 
        minimized: false,
        message: "Oh... (˘･_･˘)",
        summary: "E-COMMERCE PLATFORM (WEB + MOBILE)",
        summaryKaomoji: "\\(·_·)/",
        image: Images.LivriaImage,
        description: "Full-stack e-commerce ecosystem featuring synchronized Web and Mobile clients.",
        stack: ["VITE + VUE", "KOTLIN", "FLUTTER", "EF_CORE", "MYSQL"],
        buttons: [{ label: "GITHUB", url: "https://github.com/borj410/livria-backend" }]
    },
    { 
        id: "002", 
        name: "Talent_Manager", 
        terminated: false, 
        minimized: false,
        message: "Ouch! (>_<)",
        summary: "ENTERPRISE WORKFORCE MONITORING SYSTEM",
        summaryKaomoji: "(>v<)",
        image: Images.TalentManagerImage,
        description: "Enterprise-grade platform for performance monitoring and organizational management.",
        stack: ["ANGULAR", "SPRING_BOOT", "MYSQL"],
        buttons: [{ label: "GITHUB", url: "https://github.com/orgs/TalentManager-BERSS/repositories" }]
    },
    { 
        id: "003",
        name: "Pokemon_Mobile",
        terminated: false,
        minimized: false,
        message: "Yikes! (X_x)",
        summary: "POKÉMON APP WITH LOCAL PERSISTENCE",
        summaryKaomoji: "(O_Q)",
        image: Images.PokemonMobileImage,
        description: "Mobile utility powered by PokéAPI, implementing local data persistence via SQLite.",
        stack: ["FLUTTER", "EF_CORE", "SQLITE"],
        buttons: [{ label: "GITHUB", url: "https://github.com/borj410/pokemon-mobile" }]
    },
    {
        id: "004",
        name: "Portfolio_OS",
        terminated: false,
        minimized: false,
        message: "Oops... (/_ \\)",
        summary: "SYSTEM ALERT: YOU ARE CURRENTLY HERE!",
        summaryKaomoji: "(?_?)",
        image: Images.PortfolioOSImage,
        description: "Interactive portfolio website, focusing on custom UI components and immersive user experience.",
        stack: ["VITE + REACT"],
        buttons: [{ label: "GITHUB", url: "https://github.com/borj410/portfolio-website" }]
    },
    ]);

    const updateProjectStatus = (id, field, value) => {
        setProjects(prev => prev.map(p => {
            if (p.id === id) {
                if (field === 'terminated' && value === true) {
                    return { ...p, terminated: true, minimized: false };
                }
                if (field === 'active') {
                    return { ...p, terminated: false, minimized: false };
                }
                return { ...p, [field]: value };
            }
            return p;
        }));
    };

    const activeCount = projects.filter(p => !p.terminated).length;

    return (
        <ProjectProcessProvider value={{ updateProjectStatus }}>
            <section 
                className={styles.projectContainer}
                aria-labelledby="project-archive-title"
            >
                <header className={styles.projectHeader}>
                    <h2 id="project-archive-title" className={styles.projectTitle}>
                        PROJECT_ARCHIVE
                    </h2>
                    
                    <span className={styles.systemStatus} aria-hidden="true">
                        ACTIVE_PROCESSES: {activeCount}
                    </span>
                </header>

                <div className={styles.projectGrid} role="list">
                    {projects.map((project) => (
                        <div key={project.id} role="listitem">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>
        </ProjectProcessProvider>
    );
}

export default ProjectContainer;