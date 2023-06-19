import styles from './recipient.module.scss';
import RecipientInput from './recipient-input/recipient-input';

const Recipient = () => {
	return (
		<div className={styles.recipient}>
			<div className={styles.recipient_left}>
				<span>to: </span>
				<RecipientInput />
			</div>
		</div>
	);
};

export default Recipient;
