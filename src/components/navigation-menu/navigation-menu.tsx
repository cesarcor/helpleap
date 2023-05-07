import React from 'react';
import styles from './navigation-menu.module.scss';

const NavigationMenu = () => {
	return (
		<nav className={`${styles.nav_menu}`}>
			<ul className={`${styles.nav_menu__list}`}>
				<li className={`${styles.nav_menu__list_item}`}>
					<a href='#'>Conversations</a>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<a href='#'>Customers</a>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<a href='#'>Trends</a>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<a href='#'>Settings</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationMenu;
