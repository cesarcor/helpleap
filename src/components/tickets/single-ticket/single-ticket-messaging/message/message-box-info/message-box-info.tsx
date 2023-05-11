import styles from './message-box-info.module.scss';
import classNames from 'classnames';

interface MessageBoxInfoProps {
	origin: string;
}

const MessageBoxInfo = (props: MessageBoxInfoProps) => {
	const messageOrigin = classNames(
		{ [styles.message_box_info__incoming]: props.origin === 'incoming' },
		{ [styles.message_box_info__outgoing]: props.origin === 'outgoing' }
	);

	return (
		<div className={`${styles.message_box_info} ${messageOrigin}`}>
			<div className={styles.message_box_info__name}>Rose Downs</div>
			<div className={styles.message_box_info__time}>Today at 4:30 PM</div>
			<div className={styles.message_box_info__intstatus}>Normal</div>
		</div>
	);
};

export default MessageBoxInfo;
