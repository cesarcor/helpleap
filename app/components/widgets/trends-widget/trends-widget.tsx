import React from 'react';
import styles from './trends-widget.module.scss';
import Link from 'next/link';
import SmileSVG from '../../svgs/common/smile-svg';

const TrendsWidget = () => {
	return (
		<div className={`${styles.trends_widget}`}>
			<h2>Trends</h2>
			<div className={styles.trends_widget__list}>
				<ul>
					<li>
						<Link href='#'>
							<SmileSVG />
							Omne animal, simul atque natum sit, a natura incorrupte atque
							insitam in gravissimo bello.
						</Link>
					</li>
					<li>
						<Link href='#'>
							<SmileSVG />
							Omne animal, simul atque natum sit, a natura incorrupte atque
							insitam in gravissimo bello.
						</Link>
					</li>
					<li>
						<Link href='#'>
							<SmileSVG />
							Omne animal, simul atque natum sit, a natura incorrupte atque
							insitam in gravissimo bello.
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TrendsWidget;
