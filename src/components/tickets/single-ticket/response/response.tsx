import styles from './response.module.scss';
import AutoResponse from './auto-response/auto-response';
import EditorResponse from './editor-response/editor-response';

const Response = () => {
	return (
		<div className={styles.response_area}>
			{/* <AutoResponse /> */}
			<EditorResponse />
		</div>
	);
};

export default Response;
