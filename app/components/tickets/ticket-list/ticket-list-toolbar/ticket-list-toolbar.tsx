import styles from './ticket-list-toolbar.module.scss';
import Button from '../../../common-ui/button/button';
import Select from '../../../common-ui/select/select';
import Search from '../../../search/search';

const TicketListToolbar = () => {
	return (
		<div className={styles.ticket_list_toolbar}>
			<div className={styles.left}>
				<Button text='Open Ticket' type='default' />
				<Select
					selectTitle='Sorting'
					selectOptions={['Newest', 'Oldest', 'Priority']}
				/>
			</div>
			<div className={styles.right}>
				<Select
					selectTitle='Filter'
					selectOptions={['All', 'Open', 'Closed', 'Pending']}
				/>
				<Search />
			</div>
		</div>
	);
};

export default TicketListToolbar;
