import styles from './single-ticket-messaging.module.scss';
import Message from './message/message';
import Response from '../response/response';

const SingleTicketMessaging = () => {
	return (
		<div className={styles.single_ticket_messaging}>
			<div className={styles.single_ticket_messaging__container}>
				<div className={styles.messaging_stream}>
					<Message origin='incoming' />
					<Message origin='outgoing' />
					<Message origin='incoming' />
					<Message origin='outgoing' />
				</div>
				<Response />
			</div>
		</div>
	);
};

export default SingleTicketMessaging;
