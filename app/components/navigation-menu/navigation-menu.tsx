'use client';
import styles from './navigation-menu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TicketsSVG from '../svgs/navigation/tickets-svg';
import CustomersSVG from '../svgs/navigation/customers-svg';
import TrendsSVG from '../svgs/navigation/trends-svg';
import SettingsSVG from '../svgs/navigation/settings-svg';

const menuItems = [
	{ path: '/', label: 'Tickets', icon: <TicketsSVG /> },
	{ path: '/customers', label: 'Customers', icon: <CustomersSVG /> },
	{ path: '/trends', label: 'Trends', icon: <TrendsSVG /> },
	{ path: '/settings', label: 'Settings', icon: <SettingsSVG /> },
];

const NavigationMenu = () => {
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<nav className={`${styles.nav_menu}`}>
			<ul className={`${styles.nav_menu__list}`}>
				{menuItems.map((item) => (
					<li
						key={item.path}
						className={`${styles.nav_menu__list_item} ${
							isActive(item.path) && styles.active_menu
						}`}
					>
						<Link href={item.path}>
							{item.icon}
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationMenu;
