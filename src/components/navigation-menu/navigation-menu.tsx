import React from 'react';
import styles from './navigation-menu.module.scss';
import Link from 'next/link';
import TicketsSVG from '../svgs/navigation/tickets-svg';
import CustomersSVG from '../svgs/navigation/customers-svg';
import TrendsSVG from '../svgs/navigation/trends-svg';
import SettingsSVG from '../svgs/navigation/settings-svg';

const NavigationMenu = () => {
	return (
		<nav className={`${styles.nav_menu}`}>
			<ul className={`${styles.nav_menu__list}`}>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/'>
						<TicketsSVG />
						Tickets
					</Link>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/customers'>
						<CustomersSVG />
						Customers
					</Link>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/trends'>
						<TrendsSVG />
						Trends
					</Link>
				</li>
				<li className={`${styles.nav_menu__list_item}`}>
					<Link href='/settings'>
						<SettingsSVG />
						Settings
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationMenu;
