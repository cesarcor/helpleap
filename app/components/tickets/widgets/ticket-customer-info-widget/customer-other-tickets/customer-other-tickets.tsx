import styles from './customer-other-tickets.module.scss';
import Badge from '../../../../common-ui/badge/badge';
import Link from 'next/link';

export const CustomerOtherTickets = () => {
	return (
		<div className={styles.other_tickets}>
			<h2>Other Tickets</h2>
			<ul className={styles.other_tickets_list}>
				<li className={styles.other_tickets_list__item}>
					<Link href='#' className={styles.ticket_item}>
						<Badge text='Closed' type='low' shapeSquare={true} size='sm' />
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h3>
					</Link>
				</li>
				<li className={styles.other_tickets_list__item}>
					<Link href='#' className={styles.ticket_item}>
						<Badge text='Closed' type='low' shapeSquare={true} size='sm' />
						<h3>Lorem Ipsum</h3>
					</Link>
				</li>
				<li className={styles.other_tickets_list__item}>
					<Link href='#' className={styles.ticket_item}>
						<Badge text='Closed' type='low' shapeSquare={true} size='sm' />
						<h3>Lorem ipsum dolor sit amet </h3>
					</Link>
				</li>
			</ul>
		</div>
	);
};
