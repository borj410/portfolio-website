import React, { useEffect, useRef } from 'react';
import styles from './DvdScreen.module.css';

function DvdScreen() {
    const getRandomColor = () => {
        const h = Math.floor(Math.random() * 360);
        return `hsl(${h}, 100%, 70%)`;
    };

    const dvdScreenRef = useRef(null);
    const containerRef = useRef(null);
    const isInitialized = useRef(false);

    const stateRef = useRef({
        posX: 0,
        posY: 0,
        velX: 1.5,
        velY: 1.5,
        contWidth: 0,
        contHeight: 0
    });

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const dvd = dvdScreenRef.current;
        const container = containerRef.current;
        if (!dvd || !container) return;

        let requestRef;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                const dvdWidth = dvd.offsetWidth;
                const dvdHeight = dvd.offsetHeight;

                stateRef.current.contWidth = width;
                stateRef.current.contHeight = height;

                if (isInitialized.current) {
                    stateRef.current.posX = Math.max(0, Math.min(stateRef.current.posX, width - dvdWidth));
                    stateRef.current.posY = Math.max(0, Math.min(stateRef.current.posY, height - dvdHeight));
                    dvd.style.color = getRandomColor();
                }
            }
        });

        resizeObserver.observe(container);

        const dvdWidth = dvd.offsetWidth;
        const dvdHeight = dvd.offsetHeight;
        const initialContWidth = container.offsetWidth;
        const initialContHeight = container.offsetHeight;

        stateRef.current.posX = Math.random() * (initialContWidth - dvdWidth);
        stateRef.current.posY = Math.random() * (initialContHeight - dvdHeight);
        
        dvd.style.transform = `translate3d(${stateRef.current.posX}px, ${stateRef.current.posY}px, 0)`;
        
        isInitialized.current = true;

        const animate = () => {
            const { contWidth, contHeight } = stateRef.current;
            const dWidth = dvd.offsetWidth;
            const dHeight = dvd.offsetHeight;

            if (contWidth === 0) {
                requestRef = requestAnimationFrame(animate);
                return;
            }

            stateRef.current.posX += stateRef.current.velX;
            stateRef.current.posY += stateRef.current.velY;

            let hitWall = false;

            if (stateRef.current.posX + dWidth >= contWidth || stateRef.current.posX <= 0) {
                stateRef.current.velX *= -1;
                hitWall = true;
            }
            if (stateRef.current.posY + dHeight >= contHeight || stateRef.current.posY <= 0) {
                stateRef.current.velY *= -1;
                hitWall = true;
            }

            if (hitWall) {
                dvd.style.color = getRandomColor();
                stateRef.current.posX = Math.max(0, Math.min(stateRef.current.posX, contWidth - dWidth));
                stateRef.current.posY = Math.max(0, Math.min(stateRef.current.posY, contHeight - dHeight));
            }

            dvd.style.transform = `translate3d(${stateRef.current.posX}px, ${stateRef.current.posY}px, 0)`;
            requestRef = requestAnimationFrame(animate);
        };

        requestRef = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(requestRef);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className={styles.dvdScreen} ref={containerRef} aria-hidden="true">
            <div className={styles.dvdScreenLogo} ref={dvdScreenRef}>
                <p>(o|o)</p>
            </div>
        </div>
    );
}

export default DvdScreen;