import React from 'react';
import styles from './ticket-item-viewing.module.scss';
import RoundedImage from '../../common-ui/rounded-image/rounded-image';

const TicketItemViewing = () => {
	return (
		<div className={styles.ticket_viewing}>
			<span>Viewing:</span>
			<ul className={styles.viewing_list}>
				<li>
					<RoundedImage width='20px' height='20px' />
				</li>
				<li>
					<RoundedImage width='20px' height='20px' />
				</li>
			</ul>
		</div>
	);
};

export default TicketItemViewing;
