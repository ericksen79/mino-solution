import React from 'react';
import Tag from './Tag';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  tag?: React.ReactNode;
  title: React.ReactNode;
  desc?: React.ReactNode;
  titleId?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  desc,
  titleId,
  align = 'center',
  className = ''
}: SectionHeaderProps) {
  return (
    <header className={`${styles.header} ${styles[align]} ${className}`.trim()}>
      {tag && <Tag>{tag}</Tag>}
      {titleId ? <h2 id={titleId}>{title}</h2> : <h2>{title}</h2>}
      {desc && <p className={styles.desc}>{desc}</p>}
    </header>
  );
}
