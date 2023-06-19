'use client';

import styles from './secondary-sidebar.module.scss';
import TrendsWidget from '../../widgets/trends-widget/trends-widget';
import TicketCategorizationWidget from '../../tickets/widgets/ticket-categorization-widget/ticket-categorization-widget';
import { usePathname } from 'next/navigation';
import TicketCustomerInfoWidget from '../../tickets/widgets/ticket-customer-info-widget/ticket-customer-info-widget';
import Notifications from '../../notifications/notifications';
import UserInfo from '../../user-info/user-info';

const SecondarySidebar = () => {
	const pathname = usePathname();
	const currentRoute = pathname;

	console.log(currentRoute);

	return (
		<div className={`${styles.secondary_sidebar}`}>
			<div className={styles.secondary_sidebar__container}>
				<div className={styles.user_bar}>
					<Notifications />
					<UserInfo />
				</div>

				{currentRoute === '/' ? <TrendsWidget /> : ''}
				{currentRoute === '/ticket/1' ? <TicketCategorizationWidget /> : ''}
				{currentRoute === '/ticket/1' ? <TicketCustomerInfoWidget /> : ''}
			</div>
		</div>
	);
};

export default SecondarySidebar;
