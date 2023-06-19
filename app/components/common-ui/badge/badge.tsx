import React from 'react';
import styles from './badge.module.scss';
import classNames from 'classnames';

interface BadgeProps {
	text: string;
	type?: string | undefined;
	shapeSquare?: boolean | undefined;
	size?: string | undefined;
}

const Badge = (props: BadgeProps) => {
	const badgeType = classNames(
		{ [styles.badge__high]: props.type === 'high' },
		{ [styles.badge__medium]: props.type === 'medium' },
		{ [styles.badge__low]: props.type === 'low' },
		{ [styles.badge__neutral]: props.type === 'neutral' },
		{ [styles.badge__info]: props.type === 'info' }
	);

	const badgeShape = classNames({
		[styles.badge_shape__square]: props.shapeSquare === true,
	});

	const badgeSize = classNames({
		[styles.badge_size__sm]: props.size === 'sm',
	});

	return (
		<span className={`${styles.badge} ${badgeType} ${badgeShape} ${badgeSize}`}>
			{props.text}
		</span>
	);
};

export default Badge;
