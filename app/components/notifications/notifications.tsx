import { useState, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import styles from './notifications.module.scss';
import NotificationsBellSvg from '../svgs/notifications/notifications-bell-svg';
import NotificationItem from './notification-item/notification-item';
import Button from '../common-ui/button/button';
import Link from 'next/link';

const Notifications = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const { ref } = useClickOutside(() => {
		setIsDropdownOpen(false);
	});

	return (
		<div className={styles.notifications} ref={ref}>
			<button className={styles.notification_bell} onClick={toggleDropdown}>
				<span className={styles.notification_bell__count}>2</span>
				<NotificationsBellSvg />
			</button>

			{isDropdownOpen && (
				<div className={styles.notifications_dropdown}>
					<div className={styles.notifications_dropdown__header}>
						<div>
							<h3>Notifications</h3>
						</div>
						<div className={styles.notifications}>
							<NotificationItem />
							<NotificationItem />
						</div>
						<div className={styles.notifications_dropdown__footer}>
							<Button text='Mark all as read' type='default' />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Notifications;
