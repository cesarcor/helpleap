import styles from './single-ticket.module.scss';
import SingleTicketHeader from './single-ticket-header/single-ticket-header';
import SingleTicketMessaging from './single-ticket-messaging/single-ticket-messaging';

const SingleTicket = () => {
	return (
		<div className={styles.single_ticket}>
			<SingleTicketHeader />
			<SingleTicketMessaging />
		</div>
	);
};

export default SingleTicket;
