import React, { useState, useContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactMeForm.module.css';
import PrivacyPolicy from '../../../assets/documents/PrivacyPolicy_ContactMeForm.pdf';

function ContactMeForm( { onStatusChange }) {
    const [state, handleSubmit] = useForm("xpqypook");
    const isMobile = useMediaQuery({ maxWidth: 800 });

    useEffect(() => {
        if (state.submitting) {
            onStatusChange("SENDING");
        } else if (state.succeeded) {
            onStatusChange("SUCCESS");
        } else if (state.errors && state.errors.length > 0) {
            onStatusChange("ERROR!");
        }
    }, [state.submitting, state.succeeded, state.errors, onStatusChange]);

    if (state.succeeded) {
        return (
            <main className={styles.contactContent} role="alert">
                <div className={styles.retroForm}
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                    <p className={styles.retroLabel} style={{fontSize: '1.2em'}}>
                        MESSAGE SUBMITTED // STATUS: OK<br/>
                        <span aria-hidden="true">(‾◡‾)=b</span>
                    </p>
                    <button onClick={() => window.location.reload()} className={styles.sendBtn} style={{width: '100%', marginBottom: '0'}}>
                        GO_BACK
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.contactContent}>
            <form className={styles.retroForm} onSubmit={handleSubmit}>
                
                <div className={styles.fieldGroup}>
                    <label htmlFor="subject" className={styles.retroLabel}>SUBJECT:</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        className={styles.retroInput} 
                        placeholder="Brief description..."
                        required
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.retroLabel}>SENDER_MAIL:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className={styles.retroInput} 
                        placeholder="your-email@provider.com"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.retroLabel}>MESSAGE_BODY:</label>
                    <textarea 
                        id="message" 
                        name="message"
                        className={styles.retroTextArea} 
                        rows="5"
                        placeholder="Type your message here..."
                        style={{ resize: 'none' }}
                        required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button 
                    type="submit" 
                    className={styles.sendBtn} 
                    disabled={state.submitting}
                    aria-busy={state.submitting}
                >
                    {state.submitting ? (
                        <span className={styles.loadingDots}>SENDING</span>
                    ) : (
                        "EXECUTE_SEND"
                    )}
                </button>

                <p className={styles.privacyNote}>
                    BY CLICKING THE SEND BUTTON, YOU AGREE TO THIS {isMobile && <br/>}
                <a href={PrivacyPolicy} target="_blank" rel="noreferrer" aria-label="Privacy Policy (opens in a new tab)">
                    [ PRIVACY_POLICY ]
                </a>
                </p>
            </form>
        </main>
    );
}

export default ContactMeForm;