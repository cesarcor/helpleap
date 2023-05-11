import styles from './single-ticket-header.module.scss';
import Badge from '@/components/common-ui/badge/badge';

const SingleTicketHeader = () => {
	return (
		<div className={styles.single_ticket_header}>
			<h1 className={styles.single_ticket_header__subject}>
				I did not get my products last week yall
			</h1>
			<div className={styles.single_ticket_header__badges}>
				<Badge text='8' type='neutral' />
				<Badge text='A.I.' type='low' />
			</div>
		</div>
	);
};

export default SingleTicketHeader;
