import styles from "../EducationDisplayCard/EducationDisplayCard.module.css";

function WorkDisplayCard({ title, company, dateStart, dateEnd, description }) {
  return (
    <article className={styles.displayCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subTitle}>
        <span className={styles.srOnly}>at </span>{company}
      </p>
      
      <div className={styles.dateTag} aria-label={`From ${dateStart} to ${dateEnd}`}>
        <span aria-hidden="true">{dateStart} - {dateEnd}</span>
      </div>
      
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default WorkDisplayCard;