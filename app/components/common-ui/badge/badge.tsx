import React from 'react';
import styles from './badge.module.scss';
import classNames from 'classnames';
import CloseSVG from '../../svgs/common/close-svg';

interface BadgeProps {
	text: string;
	type?: string | undefined;
	shapeSquare?: boolean | undefined;
	size?: string | undefined;
	hasClose?: boolean | undefined;
	hasMargin?: boolean | undefined;
	onClose?: (text: string) => void;
}

const Badge = ({
	text,
	type,
	shapeSquare,
	size,
	hasClose,
	onClose,
}: BadgeProps) => {
	const badgeType = classNames(
		{ [styles.badge__high]: type === 'high' },
		{ [styles.badge__medium]: type === 'medium' },
		{ [styles.badge__low]: type === 'low' },
		{ [styles.badge__neutral]: type === 'neutral' },
		{ [styles.badge__info]: type === 'info' }
	);

	const badgeShape = classNames({
		[styles.badge_shape__square]: shapeSquare === true,
	});

	const badgeSize = classNames({
		[styles.badge_size__sm]: size === 'sm',
	});

	return (
		<span className={`${styles.badge} ${badgeType} ${badgeShape} ${badgeSize}`}>
			{text}
			{hasClose && (
				<button
					className={styles.close_btn}
					onClick={() => onClose && onClose(text)}
				>
					<CloseSVG />
				</button>
			)}
		</span>
	);
};

export default Badge;
