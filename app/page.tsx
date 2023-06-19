import { Metadata } from 'next';
import Heading from '../app/components/common-ui/heading/heading';
import Layout from '../app/components/layout/layout';
import TicketListToolbar from '../app/components/tickets/ticket-list/ticket-list-toolbar/ticket-list-toolbar';
import TicketList from '../app/components/tickets/ticket-list/ticket-list/ticket-list';

export const meta: Metadata = {
	title: 'Helpleap',
	description: 'Helpleap',
};

export default function Home() {
	return (
		<>
			<>
				<Layout>
					<Heading />
					<TicketListToolbar />
					<TicketList />
				</Layout>
			</>
		</>
	);
}
