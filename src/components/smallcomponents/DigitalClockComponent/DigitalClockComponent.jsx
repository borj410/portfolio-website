import styles from './DigitalClockComponent.module.css';
import { useState, useEffect } from 'react';

function DigitalClockComponent() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let intervalID;

        const msUntilNextSecond = 1000 - new Date().getMilliseconds();

        const timeoutID = setTimeout(() => {
            setTime(new Date());
            
            intervalID = setInterval(() => {
                setTime(new Date());
            }, 1000);
        }, msUntilNextSecond);

        return () => {
            clearTimeout(timeoutID);
            if (intervalID) clearInterval(intervalID);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'P.M.' : 'A.M.';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num) {
        return (num < 10 ? '0' : '') + num;
    }

    return (
        <div className={styles.clockContainer}>
            <div 
            className={styles.clockDisplay}
            role="timer"
            aria-live='off'
            aria-label={`Current time: ${formatTime()}`}
            >
                <span aria-hidden="true">{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClockComponent;