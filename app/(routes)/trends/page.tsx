import { Metadata } from 'next';
import Layout from '../../components/layout/layout';

export const meta: Metadata = {
	title: 'Helpleap - Trends',
};

export default function Trends() {
	return (
		<>
			<Layout>
				<h1>Trends</h1>
			</Layout>
		</>
	);
}
