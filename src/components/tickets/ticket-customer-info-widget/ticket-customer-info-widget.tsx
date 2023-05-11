import styles from './ticket-customer-info-widget.module.scss';
import Box from '@/components/common-ui/box/box';
import CustomerAvatar from '../customer-avatar/customer-avatar';

const TicketCustomerInfoWidget = () => {
	return (
		<Box>
			<div className={styles.ticket_customer_info_widget}>
				<div className={styles.ticket_customer_info_widget__container}>
					<div className={styles.ticket_customer_info__row}>
						<CustomerAvatar />
					</div>
					<div className={styles.ticket_customer_info__middle}>
						<div className={styles.ticket_customer_info__row}>
							<span>email: </span>
							<span>rose_downs@email.com</span>
						</div>
					</div>
					<div className={styles.ticket_customer_info__row}></div>
				</div>
			</div>
		</Box>
	);
};

export default TicketCustomerInfoWidget;
