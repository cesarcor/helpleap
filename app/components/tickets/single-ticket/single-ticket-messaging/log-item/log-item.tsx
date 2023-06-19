import styles from './log-item.module.scss';

const LogItem = () => {
	return (
		<div className={styles.log_item}>
			<span className={styles.log_item__text}>
				<span className={styles.log_item__actor}>John Doe</span>{' '}
				<em>marked this ticket as resolved</em>
			</span>
			<span className={styles.log_item__datetime}>8th April - 19:27</span>
		</div>
	);
};

export default LogItem;
