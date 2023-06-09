import React from 'react';
import styles from './layout.module.scss';
import { Open_Sans } from 'next/font/google';
import MainSidebar from './main-sidebar/main-sidebar';
import SecondarySidebar from './secondary-sidebar/secondary-sidebar';

const open_sans = Open_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	return (
		<div className={`${styles.app_container} ${open_sans.className}`}>
			<MainSidebar />

			<main className={`${styles.app_main}`}>
				<div className={styles.content}>{props.children}</div>
			</main>

			<SecondarySidebar />
		</div>
	);
};

export default Layout;
