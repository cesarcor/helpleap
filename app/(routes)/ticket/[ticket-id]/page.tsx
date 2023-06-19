import { Metadata } from 'next';
import Layout from '../../../components/layout/layout';
import Box from '../../../components/common-ui/box/box';
import SingleTicket from '../../../components/tickets/single-ticket/single-ticket';
import TicketStatusControl from '../../../components/tickets/single-ticket/ticket-status-control/ticket-status-control';

export const meta: Metadata = {
	title: 'Helpleap - Ticket',
};

export default function Ticket() {
	return (
		<>
			<Layout>
				<TicketStatusControl />
				<Box min_height='550px'>
					<SingleTicket />
				</Box>
			</Layout>
		</>
	);
}
