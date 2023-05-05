import React from 'react';
import styles from './ticket-list-item.module.scss';
import Badge from '../badge/badge';

const TicketListItem = () => {
	return (
		<div className={`${styles.ticket_item}`}>
			<div>
				<img src='' alt='' />
			</div>

			<div>
				<span>Received 38 Minutes Ago</span>
				<h3>I did not get my products last week yall</h3>
				<p>
					Omne animal, simul atque natum sit, a natura incorrupte atque insitam
					in gravissimo bello animadversionis metu degendae praesidia…
				</p>
				<div>
					<Badge text='#ME4814' />
					<Badge text='High' />
				</div>
			</div>
		</div>
	);
};

export default TicketListItem;
