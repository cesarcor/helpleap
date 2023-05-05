import React from 'react';
import styles from './badge.module.scss';

interface BadgeProps {
	text: string;
}

const Badge = (props: BadgeProps) => {
	return <span className={`${styles.badge}`}>{props.text}</span>;
};

export default Badge;
