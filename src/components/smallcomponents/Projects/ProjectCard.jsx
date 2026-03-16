import { useEffect } from 'react';
import styles from "./ProjectCard.module.css";
import { useProjectProcess } from "./ProjectProcessContext";
import { useMediaQuery } from 'react-responsive';

const ProjectCard = ({ project }) => {
    const { updateProjectStatus } = useProjectProcess();

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    const getWindowTitle = () => {
        if (project.terminated) return "PROCESS_HALTED";
        if (project.minimized) return `${project.name}.exe (SUSPENDED)`;
        return `${project.name}.exe`;
    };
    
    const maximize = () => {
        updateProjectStatus(project.id, 'terminated', false);
        updateProjectStatus(project.id, 'minimized', false);
    };

    useEffect(() => {
        if (isMobile) {
            maximize();
        }
    }, [isMobile])

    return (
        <article 
            className={`${styles.projectCard} ${project.terminated ? styles.isTerminated : ""}`}
            aria-labelledby={`title-${project.id}`}
        >
            <div className={styles.windowHeader}>
                <span id={`title-${project.id}`} className={styles.windowTitle}>
                    {project.id} - {getWindowTitle()}
                </span>
                
                {!isMobile && (
                    <div className={styles.windowControls}>
                        <button 
                            className={styles.controlBtn}
                            onClick={() => updateProjectStatus(project.id, 'minimized', true)}
                            disabled={project.minimized || project.terminated}
                            aria-label={`Minimize ${project.name} window`}
                        >
                            _
                        </button>

                        <button
                            className={`${styles.controlBtn} ${styles.maximizeBtn}`}
                            onClick={() => updateProjectStatus(project.id, 'active')}
                            disabled={project.terminated || !project.minimized}
                            aria-label={`Maximize ${project.name} window`}
                        >
                            □
                        </button>

                        <button
                            className={`${styles.controlBtn} ${styles.closeBtn}`}
                            onClick={() => updateProjectStatus(project.id, 'terminated', true)}
                            disabled={project.terminated}
                            aria-label={`Terminate ${project.name} process`}
                        >
                            X
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.windowContent}>
                {project.terminated ? (
                    <div className={styles.terminatedOverlay} role="alert">
                        <span className={styles.kaomoji} aria-hidden="true">{project.message}</span>
                        <p className={styles.srOnly}>Process halted for {project.name}</p>
                        <button
                            className={styles.restartBtn}
                            onClick={() => updateProjectStatus(project.id, 'terminated', false)}
                            aria-label={`Reboot ${project.name} system`}
                        >
                            REBOOT_SYSTEM
                        </button>
                    </div>
                ) : project.minimized ? (
                    <div className={styles.minimizedOverlay}>
                        <span className={styles.minimizedKaomoji} aria-hidden="true">{project.summaryKaomoji}</span>
                        <p className={styles.summaryText}>{project.summary}</p>
                        <p className={styles.srOnly}>{project.name} is currently suspended.</p>
                    </div>
                ) : (
                    <div className={styles.activeContent}>
                        <div className={styles.imageContainer}>
                            <a 
                                href={project.buttons[0]?.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.imageLink}
                                aria-label={`View ${project.name} repository on GitHub`}
                            >
                                <img 
                                    src={project.image} 
                                    alt={`Screenshot of ${project.name} project`} 
                                    className={styles.projectImage} 
                                />
                            </a>
                        </div>
                        
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.projectDesc}>{project.description}</p>

                        <div className={styles.stackGrid} aria-label={`Tech stack for ${project.name}`}>
                            {project.stack.map((tech) => (
                                <span key={tech} className={styles.techPill}>{tech}</span>
                            ))}
                        </div>

                        <div className={styles.actionArea}>
                            {project.buttons.map((btn, idx) => (
                                <a 
                                    key={idx} 
                                    href={btn.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={styles.actionBtn}
                                    aria-label={`Open ${btn.label} for ${project.name}`}
                                >
                                    [{btn.label}]
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;