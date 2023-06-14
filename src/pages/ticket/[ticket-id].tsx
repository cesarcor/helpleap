import Head from 'next/head';
import Layout from '@/components/layout/layout';
import Box from '@/components/common-ui/box/box';
import SingleTicket from '@/components/tickets/single-ticket/single-ticket';
import TicketStatusControl from '@/components/tickets/single-ticket/ticket-status-control/ticket-status-control';

export default function Ticket() {
	return (
		<>
			<Head>
				<title>AI Helpdesk</title>
				<meta name='description' content='Ticket view' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<TicketStatusControl />
				<Box min_height='550px'>
					<SingleTicket />
				</Box>
			</Layout>
		</>
	);
}
