import styles from './Marquee.module.css';

function Marquee() {
  const message = "Congratulations! You are the 1.000.000th visitor! (￣▽￣) 🎉🎉🎉";
  const rickrollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const MarqueeItem = () => (
    <div className={styles.marqueeItem}>
      {message} 
      <span
        className={styles.prizeLink}
        onClick={() => window.open(rickrollUrl, '_blank', 'noopener,noreferrer')}
        aria-label="Rickroll Prize Link"
      >
        [CLICK HERE TO CLAIM YOUR PRIZE!!!]
      </span>
    </div>
  );

  return (
    <div 
      className={styles.marqueeContainer} 
      role="complementary"
      aria-hidden="true"
    >
      <div className={styles.marqueeContent}>
        <div className={styles.marqueeGroup} aria-hidden="true">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
        <div className={styles.marqueeGroup} aria-hidden="true">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </div>
  );
}

export default Marquee;