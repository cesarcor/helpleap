import { useState, useEffect, useRef } from 'react';
import styles from './user-info.module.scss';
import RoundedImage from '../common-ui/rounded-image/rounded-image';
import ChevronSVG from '../svgs/common/chevron-svg';
import Link from 'next/link';
import useClickOutside from '@/hooks/useClickOutside';

const UserInfo = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const { ref } = useClickOutside(() => {
		setIsDropdownOpen(false);
	});

	return (
		<div className={styles.user_info}>
			<div className='user_info__avatar'>
				<RoundedImage width='30px' height='30px' />
			</div>
			<div className={styles.user_info__content}>
				<div
					className={styles.user_info__name}
					onClick={toggleDropdown}
					ref={ref}
				>
					<div>
						<h3>John Doe</h3>
						<span className={styles.online_status}>
							<div
								className={`${styles.user_status_icon} ${styles.user_status_icon__online}`}
							></div>
							<span className={styles.online_status__text}>Online</span>
						</span>
					</div>
					<ChevronSVG />
				</div>
				{isDropdownOpen && (
					<div className={styles.user_info__dropdown}>
						<div className={styles.dropdown_row}>
							<span>Set Status: </span>
							<ul className={styles.user_status_list}>
								<li>
									<button>
										<div
											className={`${styles.user_status_icon} ${styles.user_status_icon__online}`}
										></div>
										Online
									</button>
								</li>
								<li>
									<button>
										<div
											className={`${styles.user_status_icon} ${styles.user_status_icon__unavailable}`}
										></div>
										Unavailable
									</button>
								</li>
								<li>
									<button>
										<div
											className={`${styles.user_status_icon} ${styles.user_status_icon__offline}`}
										></div>
										Offline
									</button>
								</li>
							</ul>
						</div>
						<div className={styles.dropdown_row}>
							<ul className={styles.user_control_list}>
								<li>
									<Link href='#'>Profile</Link>
								</li>
								<li>
									<Link href='#'>Logout</Link>
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserInfo;
