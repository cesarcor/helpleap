import React from 'react';
import styles from './secondary-sidebar.module.scss';
import TrendsWidget from '../trends-widget/trends-widget';

const SecondarySidebar = () => {
	return (
		<div className={`${styles.secondary_sidebar}`}>
			<TrendsWidget />
		</div>
	);
};

export default SecondarySidebar;
