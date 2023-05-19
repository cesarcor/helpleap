import styles from './customer-details.module.scss';

const CustomerDetails = () => {
	return (
		<div className={styles.customer_details}>
			<span>email: </span>
			<span>rose_downs@email.com</span>
		</div>
	);
};

export default CustomerDetails;
