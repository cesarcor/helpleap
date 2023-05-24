import styles from './secondary-sidebar.module.scss';
import TrendsWidget from '../trends-widget/trends-widget';
import TicketCategorizationWidget from '../tickets/ticket-categorization-widget/ticket-categorization-widget';
import { useRouter } from 'next/router';
import TicketCustomerInfoWidget from '../tickets/ticket-customer-info-widget/ticket-customer-info-widget';
import Notifications from '../notifications/notifications';
import UserInfo from '../user-info/user-info';

const SecondarySidebar = () => {
	const router = useRouter();
	const currentRoute = router.pathname;

	console.log(currentRoute);

	return (
		<div className={`${styles.secondary_sidebar}`}>
			<div className={styles.secondary_sidebar__container}>
				<div className={styles.user_bar}>
					<Notifications />
					<UserInfo />
				</div>

				{currentRoute === '/' ? <TrendsWidget /> : ''}
				{currentRoute === '/ticket/[ticket-id]' ? (
					<TicketCategorizationWidget />
				) : (
					''
				)}
				{currentRoute === '/ticket/[ticket-id]' ? (
					<TicketCustomerInfoWidget />
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default SecondarySidebar;
