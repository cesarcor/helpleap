import styles from './message.module.scss';
import MessageBox from './message-box/message-box';
import MessageBoxInfo from './message-box-info/message-box-info';
import classNames from 'classnames';

interface MessageProps {
	origin: string;
}

const Message = (props: MessageProps) => {
	const messageOrigin = classNames(
		{ [styles.message_item__incoming]: props.origin === 'incoming' },
		{ [styles.message_item__outgoing]: props.origin === 'outgoing' }
	);

	return (
		<div className={`${styles.message_item} ${messageOrigin}`}>
			<MessageBoxInfo origin={props.origin} />
			<MessageBox origin={props.origin} />
		</div>
	);
};

export default Message;
