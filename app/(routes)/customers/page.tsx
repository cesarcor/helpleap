import { Metadata } from 'next';
import Layout from '../../components/layout/layout';

export const meta: Metadata = {
	title: 'Helpleap - Customers',
};

export default function Customers() {
	return (
		<>
			<Layout>
				<h1>Customers</h1>
			</Layout>
		</>
	);
}
