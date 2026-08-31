import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  className = ''
}: ServiceCardProps) {
  return (
    <article className={`${styles.serviceCard} ${className}`.trim()}>
      {icon && (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      
      {features && features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
