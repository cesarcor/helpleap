import styles from './ticket-categorization-widget.module.scss';
import Box from '../../../common-ui/box/box';
import Select from '../../../common-ui/select/select';

const TicketCategorizationWidget = () => {
	return (
		<Box margin_bottom='10px'>
			<div className={styles.ticketCategorizationWidget}>
				<Select
					selectTitle='Group'
					selectOptions={['Tier 1', 'Tier 2', 'Customer Support']}
					hasSearch
				/>
				<Select
					selectTitle='Assignment'
					selectOptions={['AI', 'John Doe', 'Mary Doe', 'Richard Richardson']}
					hasSearch
				/>
				<Select
					selectTitle='Tags'
					selectOptions={['Shipping', 'Priority Customer']}
					hasSearch
				/>
			</div>
		</Box>
	);
};

export default TicketCategorizationWidget;
