import styles from './ticket-customer-info-widget.module.scss';
import Box from '../../../common-ui/box/box';
import CustomerAvatar from '../../customer-avatar/customer-avatar';
import CustomerDetails from './customer-details/customer-details';
import { CustomerOtherTickets } from './customer-other-tickets/customer-other-tickets';

const TicketCustomerInfoWidget = () => {
	return (
		<Box>
			<div className={styles.ticket_customer_info_widget}>
				<div className={styles.ticket_customer_info_widget__container}>
					<div className={styles.ticket_customer_info__row}>
						<CustomerAvatar />
					</div>
					<div className={styles.ticket_customer_info__row}>
						<CustomerDetails />
					</div>
					<div className={styles.ticket_customer_info__row}>
						<CustomerOtherTickets />
					</div>
				</div>
			</div>
		</Box>
	);
};

export default TicketCustomerInfoWidget;
