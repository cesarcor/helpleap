import styles from './message-box.module.scss';
import classNames from 'classnames';

interface MessageBoxProps {
	origin: string;
}

const MessageBox = (props: MessageBoxProps) => {
	const messageOrigin = classNames(
		{ [styles.message_box__incoming]: props.origin === 'incoming' },
		{ [styles.message_box__outgoing]: props.origin === 'outgoing' }
	);

	return (
		<div className={`${styles.message_box} ${messageOrigin}`}>
			<p>
				Quae vero auctorem tractata ab fiducia dicuntur. Quae cum dixisset
				paulumque
			</p>
			<p>
				Pertinax non emolumento aliquo, sed animo etiam ac ratione intellegi
				posse et aut officiis debitis aut quid et quale sit sentiri haec ratio
				late patet in quo ignorare vos arbitrer, sed uti oratione perpetua malo
				quam ostendis sed animo etiam erga nos causae.
			</p>
		</div>
	);
};

export default MessageBox;
