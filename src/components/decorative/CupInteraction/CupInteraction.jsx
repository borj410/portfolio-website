import { useState, useEffect } from 'react';
import styles from './CupInteraction.module.css';

function CupInteraction() {
    const [isFallen, setIsFallen] = useState(false);
    const [isResetting, setIsResetting] = useState(false);
    const [fallX, setFallX] = useState(0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseEnter = (e) => {
        if (!isFallen && !isResetting && !prefersReducedMotion) {
            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const direction = e.clientX < centerX ? 1 : -1;
            
            setFallX(direction); 
            setIsFallen(true);
        }
    };

    const handleReset = () => {
        setIsResetting(true);
        setIsFallen(false);
        
        setTimeout(() => {
            setIsResetting(false);
        }, 500);
    };
    
    return (
        <div className={styles.cupInteraction} aria-hidden="true">
            <div className={styles.reactionSection}>
                <div className={styles.cupDialogue}>
                    {isFallen ? "Whoops..." : "Look at my cool drink!"}
                </div>
                <div className={styles.cupKaomoji}>
                    {isFallen ? '(⊙ˍ⊙)' : '( •̀ ω •́ )✧'}
                </div>
            </div>

            <div className={styles.cupSection}>
                <div 
                    className={`${styles.cup} ${isFallen ? styles.falling : ''} ${isResetting ? styles.reappearing : ''}`}
                    style={{ '--dir': fallX }}
                    onMouseEnter={handleMouseEnter}
                >
                    <span role="img" aria-label="wine glass" style={{fontSize: '4rem'}}>🍷</span>
                </div>
                
                <div className={styles.cupTable}>
                    {"[=================]"}
                    <br />
                    {"  ||         ||  "}
                </div>
            </div>

            {(isFallen || isResetting) && (
                <button 
                    className={`
                        ${styles.resetBtn} 
                        ${isFallen && !isResetting ? styles.btnVisible : styles.btnHidden}
                    `} 
                    onClick={handleReset}
                    disabled={isResetting}
                    tabIndex="-1"
                >
                    RE-SERVE
                </button>
            )}
        </div>
    );
}

export default CupInteraction;