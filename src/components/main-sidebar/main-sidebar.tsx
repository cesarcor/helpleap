import React from 'react';
import NavigationMenu from '../navigation-menu/navigation-menu';
import styles from './main-sidebar.module.scss';

const MainSidebar = () => {
	return (
		<div className={`${styles.main_sidebar}`}>
			<NavigationMenu />
		</div>
	);
};

export default MainSidebar;
