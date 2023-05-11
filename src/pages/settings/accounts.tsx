import Head from 'next/head';
import Layout from '@/components/layout/layout';

export default function AccountsSettings() {
	return (
		<>
			<Head>
				<title>Settings - Accounts</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<h1>This is accounts</h1>
			</Layout>
		</>
	);
}