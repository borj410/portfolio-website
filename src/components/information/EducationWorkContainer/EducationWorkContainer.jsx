import { useState } from "react";
import styles from "./EducationWorkContainer.module.css";
import EducationDisplayCard from "../../smallcomponents/EducationWork/EducationDisplayCard/EducationDisplayCard";
import WorkDisplayCard from "../../smallcomponents/EducationWork/WorkDisplayCard/WorkDisplayCard";

function EducationWorkContainer() {
  const [activeTab, setActiveTab] = useState("edu");

  const educationData = [
    { 
      id: 1,
      title: "Bachelor of Software Engineering",
      institution: "UPC - Universidad Peruana de Ciencias Aplicadas",
      dateStart: "Mar 2023",
      dateEnd: "Dec 2027 (Expected)",
      description: "Specializing in Full-stack development for web applications. Experienced in collaborative project environments, focusing on building responsive, user-centric software. Actively developing technical proficiency in both frontend and backend technologies."
    },
  ];

  const workData = [
  ];

  const containerClasses = `${styles.educationWorkContainer} ${activeTab === "work" ? styles.workMode : ""}`;

  const toggleTab = () => setActiveTab(activeTab === "edu" ? "work" : "edu");

  return (
    <section 
      className={containerClasses} 
      aria-labelledby="records-title"
    >
      <header className={styles.educationWorkHeader}>
        <button 
          className={styles.toggleWrapper} 
          onClick={toggleTab}
          aria-label={`Switch to ${activeTab === "edu" ? "Work Experience" : "Education"} records`}
          aria-pressed={activeTab === "work"}
          type="button"
        >
          <div 
            className={`${styles.toggleSlider} ${activeTab === "work" ? styles.slideRight : ""}`} 
            aria-hidden="true" 
          />
          <span className={`${styles.toggleLabel} ${activeTab === "edu" ? styles.labelActive : ""}`}>
            EDUCATION
          </span>
          <span className={`${styles.toggleLabel} ${activeTab === "work" ? styles.labelActive : ""}`}>
            WORK
          </span>
        </button>
        
        <h2 id="records-title" className={styles.educationWorkTitle}>
          Records_System
        </h2>
      </header>

      <div 
        className={styles.contentArea} 
        style={{ "--card-accent": "var(--current-accent)" }}
        role="region"
        aria-live="polite"
      >
        {activeTab === "edu" ? (
          <div className={styles.educationContent} role="list">
            {educationData.map((edu, i) => (
              <div key={i} role="listitem">
                <EducationDisplayCard {...edu} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.workContent}>
            {workData.length > 0 ? (
              <div role="list">
                {workData.map((work, i) => (
                  <div key={i} role="listitem">
                    <WorkDisplayCard {...work} />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyWorkState}>
                <p className={styles.terminalPrompt}>
                  <span className={styles.srOnly}>Status: </span>
                  {'>'} Currently a full-time student focusing on mastering the full-stack pipeline, 
                  actively seeking my first internship!&nbsp;
                  <span className={styles.kaomoji} aria-hidden="true">ˋ( ° ▽、° )</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default EducationWorkContainer;