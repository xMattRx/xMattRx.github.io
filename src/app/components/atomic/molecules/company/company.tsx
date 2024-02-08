import React from 'react';
import styles from "./company.module.scss";

interface CompanyProps {
  year: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
}

const Company: React.FC<CompanyProps> = ({ year, title, role, description, skills }) => {
  return (
    <div className={styles.company}>
      <span className={styles.company__year}>{year}</span>
      <h3 className={styles.company__title}>{title}</h3>
      <span className={styles.company__role}>{role}</span>
      <p className={styles.company__description}>{description}</p>
      <ul className={styles.company__skills}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Company;