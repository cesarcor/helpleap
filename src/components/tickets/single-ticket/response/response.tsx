import styles from './response.module.scss';
import AutoResponse from './auto-response/auto-response';

const Response = () => {
	return (
		<div className={styles.response_area}>
			<AutoResponse />
		</div>
	);
};

export default Response;
