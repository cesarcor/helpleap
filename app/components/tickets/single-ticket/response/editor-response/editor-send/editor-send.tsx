import styles from './editor-send.module.scss';
import Button from '../../../../../common-ui/button/button';

const EditorSend = () => {
	return (
		<div className={styles.editor_send}>
			<Button text='Send' type='default' />
		</div>
	);
};

export default EditorSend;
