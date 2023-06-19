import { Metadata } from 'next';
import Layout from '../../components/layout/layout';

export const meta: Metadata = {
	title: 'Helpleap - Settings',
};

export default function Settings() {
	return (
		<>
			<Layout>
				<h1>Settings</h1>
			</Layout>
		</>
	);
}
