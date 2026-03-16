import styles from "./IntroductionWelcome.module.css";
import * as Icons from '../../../../assets/icons';
import CV from '../../../../assets/documents/Gabriel_Borja_CV.pdf'

function IntroductionWelcome() {
    return (
        <div className={styles.introductionWelcomeSide}>
            {/* Background Kaomoji - Hidden as discussed */}
            <div className={styles.kaomojiBackground} aria-hidden="true">
                <span className={styles.kaomojiText}></span>
            </div>
            
            <h1 className={styles.welcomeTitle}>Hi, I'm Gabriel!</h1>
            
            <div className={styles.systemDescription}>
                <p><span aria-hidden="true">{'>'} </span>CURRENT_ROLE: <span className={styles.highlightText}>FULLSTACK_DEVELOPER</span></p>
                <p><span aria-hidden="true">{'>'} </span>STATUS: <span className={styles.highlightText}>OPEN_TO_WORK</span></p>
                <p aria-label="Core Tech: Vue.js, React.js, Flutter, and .NET">
                    <span aria-hidden="true">{'>'} </span>CORE_TECH: 
                    <span className={styles.highlightText}> VUE.JS <span aria-hidden="true">//</span> REACT.JS <span aria-hidden="true">//</span> FLUTTER <span aria-hidden="true">//</span> .NET (EF_CORE)</span>
                </p>
                <p>
                    Software Engineering student building robust Full-Stack applications.
                    Backend-heavy by nature, but deeply driven by Frontend exploration and UX design.
                </p>
            </div>

            <nav className={styles.contactGrid} aria-label="Social and Contact links">
                <a 
                    href={CV} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${styles.contactLine} ${styles.cvButton}`}
                    aria-label="Download CV as PDF"
                >
                    <img src={Icons.DownloadFileIcon} alt="" aria-hidden="true" className={styles.contactIcon} width="25px" height="25px"/>
                    <span className={styles.systemBtn} aria-hidden="true">[DOWNLOAD CV.pdf]</span>
                </a>
                <a 
                    href="https://github.com/borj410" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactLine}
                    aria-label="GitHub Profile"
                >
                    <img src={Icons.GitIcon} alt="" aria-hidden="true" className={styles.contactIcon} width="25px" height="25px"/>
                    <span className={styles.systemBtn} aria-hidden="true">[GITHUB]</span>
                </a>

                <a 
                    href="https://www.linkedin.com/in/gabriel-borja-molina" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactLine}
                    aria-label="LinkedIn Profile"
                >
                    <img src={Icons.LinkedInIcon} alt="" aria-hidden="true" className={styles.contactIcon} width="25px" height="25px"/>
                    <span className={styles.systemBtn} aria-hidden="true">[LINKEDIN]</span>
                </a>

                <a 
                    href="mailto:borjagabriel45@gmail.com" 
                    className={styles.contactLine}
                    aria-label="Send me an email"
                >
                    <img src={Icons.MailIcon} alt="" aria-hidden="true" className={styles.contactIcon} width="25px" height="25px"/>
                    <span className={styles.systemBtn} aria-hidden="true">[MAIL ME]</span>
                </a>
            </nav>
        </div>
    );
}

export default IntroductionWelcome;