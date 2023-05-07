import React from 'react';
import styles from './ticket-list-item.module.scss';
import CustomerAvatar from '../customer-avatar/customer-avatar';
import Badge from '../../common-ui/badge/badge';
import TicketInterventionStatus from '../ticket-intervention-status/ticket-intervention-status';
import AssignedUser from '../assigned-user/assigned-user';
import TicketItemViewing from '../ticket-item-viewing/ticket-item-viewing';
import classNames from 'classnames';

interface TicketListItemProps {
	intervention_status?: string;
}

const TicketListItem = (props: TicketListItemProps) => {
	const ticketItemInterventionStatus = classNames(
		{
			[styles.ticket_item_intervention_status__high]:
				props.intervention_status === 'high',
		},
		{
			[styles.ticket_item_intervention_status__medium]:
				props.intervention_status === 'medium',
		}
	);

	return (
		<div className={`${styles.ticket_item} ${ticketItemInterventionStatus}`}>
			<div className={styles.ticket_item_customer_col}>
				<CustomerAvatar />
			</div>

			<div className={styles.ticket_item_content_col}>
				<span className={styles.ticket_time}>Received 38 Minutes Ago</span>
				<h3 className={styles.ticket_subject}>
					I did not get my products last week yall
				</h3>
				<p className={styles.ticket_excerpt}>
					Omne animal, simul atque natum sit, a natura incorrupte atque insitam
					in gravissimo bello animadversionis metu degendae praesidia…
				</p>
				<div className={styles.ticket_item_info}>
					<Badge text='#ME4814' type='info' />
					<Badge text='High' type='high' />
					<Badge text='8' type='neutral' />
					<TicketItemViewing />
				</div>
			</div>

			<div className={styles.ticket_item_status_details_col}>
				<Badge text='Open' type='high' />
				<TicketInterventionStatus />
				<AssignedUser />
			</div>
		</div>
	);
};

export default TicketListItem;
