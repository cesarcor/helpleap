import styles from './ticket-categorization-widget.module.scss';
import Box from '@/components/common-ui/box/box';
import Select from '@/components/common-ui/select/select';

const TicketCategorizationWidget = () => {
	return (
		<Box>
			<div className={styles.ticketCategorizationWidget}>
				<Select
					selectTitle='Group'
					selectOptions={['Tier 1', 'Tier 2', 'Customer Support']}
				/>
				<Select
					selectTitle='Assignment'
					selectOptions={['AI', 'John Doe', 'Mary Doe', 'Richard Richardson']}
				/>
				<Select
					selectTitle='Tags'
					selectOptions={['Shipping', 'Priority Customer']}
				/>
			</div>
		</Box>
	);
};

export default TicketCategorizationWidget;
