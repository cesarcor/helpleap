import React from 'react';
import styles from './ticket-list.module.scss';
import TicketListItem from '../ticket-list-item/ticket-list-item';

const TicketList = () => {
	return (
		<div className={`${styles.ticket_list}`}>
			<TicketListItem />
			<TicketListItem intervention_status='medium' />
			<TicketListItem intervention_status='high' />
			<TicketListItem />
			<TicketListItem />
			<TicketListItem />
			<TicketListItem />
			<TicketListItem />
			<TicketListItem />
			<TicketListItem />
		</div>
	);
};

export default TicketList;
