import styles from './ContactMeContainer.module.css';
import ContactMeForm from '../../smallcomponents/ContactMe/ContactMeForm';
import React, { useState } from 'react';

function ContactMeContainer() {
    const [status, setStatus] = useState("READY");

    return (
        <section className={styles.contactContainer} aria-labelledby="contact-title">
            <header className={styles.contactHeader}>
                <h2 id="contact-title" className={styles.contactTitle}>Contact_Me</h2>
                <span 
                    className={styles.systemStatus} 
                    aria-live="polite" 
                    role="status"
                >
                    Status: {status}
                </span>
            </header>
            <ContactMeForm onStatusChange={setStatus} />
        </section>
    );
}

export default ContactMeContainer;