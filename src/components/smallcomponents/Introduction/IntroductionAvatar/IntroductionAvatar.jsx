import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "./IntroductionAvatar.module.css";
import * as Images from '../../../../assets/images';

function IntroductionAvatar() {
    const [viewState, setViewState] = useState('active'); // 'active', 'minimized', 'terminated'
    const [detectiveAvatar, setDetectiveAvatar] = useState(Images.Detective2);

    const handleAvatarClick = () => {
        if (detectiveAvatar === Images.Detective2) {
            setDetectiveAvatar(Images.Detective1);
        } else {
            setDetectiveAvatar(Images.Detective2);
        }
    };

    const activate = () => { setViewState('active'); };
    const minimize = () => { setViewState('minimized'); };
    const terminate = () => { setViewState('terminated'); setDetectiveAvatar(Images.Detective2); };

    const windowTitles = {
        active: "USER_PROFILE",
        minimized: "MINI_PROFILE",
        terminated: "PROCESS_HALTED"
    };

    return (
        <div className={styles.introductionAvatarSide}>
            <section 
                className={`${styles.avatarWindow} ${viewState === 'terminated' ? styles.isTerminated : ""}`}
                aria-labelledby="window-title"
            >
                <div className={styles.windowHeader}>
                    <span className={styles.windowTitle} id="window-title">
                        {windowTitles[viewState] || "USER_PROFILE"}
                    </span>
                    
                    <div className={styles.windowControls}>
                        <button 
                            className={styles.controlBtn} 
                            onClick={minimize}
                            disabled={viewState === 'minimized' || viewState === 'terminated'}
                            aria-label="Minimize avatar window"
                            aria-pressed={viewState === 'minimized'}
                        > _ </button>
                        
                        <button 
                            className={`${styles.controlBtn} ${styles.maximizeBtn}`} 
                            onClick={activate}
                            disabled={viewState === 'active' || viewState === 'terminated'}
                            aria-label="Restore avatar window"
                            aria-pressed={viewState === 'active'}
                        > □ </button>
                        
                        <button 
                            className={`${styles.controlBtn} ${styles.closeBtn}`} 
                            onClick={terminate}
                            disabled={viewState === 'terminated'}
                            aria-label="Close avatar window"
                        > X </button>
                    </div>
                </div>

                <div className={styles.windowContent} aria-live="polite">
                    {viewState === 'active' && (
                        <div className={styles.infoText}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={detectiveAvatar} 
                                    alt="Pixel art detective avatar representing Gabriel Borja" 
                                    className={styles.avatarImage}
                                    onClick={handleAvatarClick}
                                />
                            </div>
                            <div className={styles.metaData}>
                                <p className={styles.locationLine}><span className={styles.label}>USER_ID:</span> GABRIEL BORJA</p>
                                <p className={styles.locationLine}><span className={styles.label}>AGE:</span> 20 years</p>
                                <p className={styles.locationLine}><span className={styles.label}>LOCATION:</span> LIMA, PERU</p>
                                <p className={styles.locationLine}><span className={styles.label}>LANGUAGE:</span> ENGLISH // SPANISH</p>
                            </div>
                        </div>
                    )}

                    {viewState === 'minimized' && (
                        <div className={styles.summaryView}>
                            <p className={styles.summaryText}>
                                Also known as borj410.<br/>
                                Yes, the window controls work!
                            </p>
                            <span className={styles.summaryKaomoji} aria-hidden="true">(· ·)</span>
                        </div>
                    )}

                    {viewState === 'terminated' && (
                        <div className={styles.terminatedOverlay}>
                            <span className={styles.kaomoji} aria-hidden="true">！！！ (⓿_⓿)</span>
                            <button className={styles.restartBtn} onClick={activate}>
                                RESTORE SYSTEM
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default IntroductionAvatar;