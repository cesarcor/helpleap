import React from 'react';
import NavigationMenu from '../navigation-menu/navigation-menu';
import styles from './main-sidebar.module.scss';
import Image from 'next/image';

const MainSidebar = () => {
	return (
		<div className={`${styles.main_sidebar}`}>
			<div className={`${styles.logo}`}>
				<Image src='/images/logo.png' alt='logo' width={50} height={50} />
			</div>
			<NavigationMenu />
		</div>
	);
};

export default MainSidebar;
