import React from 'react';
import styles from './customer-avatar.module.scss';
import RoundedImage from '../../common-ui/rounded-image/rounded-image';

const CustomerAvatar = () => {
	return (
		<div className={styles.customer_avatar}>
			<RoundedImage width='70px' height='70px' />
			<div className={styles.customer_avatar_name}>John Doe</div>
		</div>
	);
};

export default CustomerAvatar;
