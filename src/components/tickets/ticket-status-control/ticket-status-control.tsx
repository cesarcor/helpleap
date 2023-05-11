import styles from './ticket-status-control.module.scss';
import Button from '@/components/common-ui/button/button';
import Badge from '@/components/common-ui/badge/badge';
import Select from '@/components/common-ui/select/select';

const TicketStatusControl = () => {
	return (
		<div className={styles.ticket_status_control}>
			<div className={styles.left}>
				<Badge text='#ME345' type='info' />
				<Button text='Follow' type='default' />
			</div>
			<div className={styles.right}>
				<Select
					selectTitle='Priority'
					selectOptions={['High', 'Medium', 'Low']}
				/>
				<Select
					selectTitle='Status'
					selectOptions={['Open', 'Pending', 'Closed']}
				/>
			</div>
		</div>
	);
};

export default TicketStatusControl;
