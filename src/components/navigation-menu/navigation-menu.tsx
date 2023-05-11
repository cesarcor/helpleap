import React from 'react';
import styles from './navigation-menu.module.scss';
import Link from 'next/link';

const NavigationMenu = () => {
	return (
		<nav className={`${styles.nav_menu}`}>
			<ul className={`${styles.nav_menu__list}`}>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/'>Tickets</Link>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/customers'>Customers</Link>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/trends'>Trends</Link>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/settings'>Settings</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationMenu;
