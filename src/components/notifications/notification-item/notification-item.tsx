import styles from './notification-item.module.scss';
import RoundedImage from '../../common-ui/rounded-image/rounded-image';
import Link from 'next/link';

const NotificationItem = () => {
	return (
		<Link href='/' className={styles.notification_item}>
			<div className={styles.notification_item__header}>
				<RoundedImage width='30px' height='30px' />
				<span>
					<span className={styles.notification_originator}>Maria Smith </span>
					<span className={styles.notification_type}>
						Assigned this ticket to you:{' '}
					</span>
				</span>
			</div>
			<div className={styles.notification_item__body}>
				<div className={styles.notification_content}>
					<div
						className={`${styles.notification_preview} ${styles.notification_preview__ticket}`}
					>
						<p>I am trying to order something but I am unable to finish t…</p>
					</div>
				</div>
				<span className={styles.notification_date_time}>
					Yesterday at 13:46
				</span>
			</div>
		</Link>
	);
};

export default NotificationItem;
