import { useState } from 'react';
import styles from './response.module.scss';
import AutoResponse from './auto-response/auto-response';
import EditorResponse from './editor-response/editor-response';

const Response = () => {
	const [activeComponent, setActiveComponent] = useState('auto');

	const handleVisibilitySwitch = (component: string) => {
		setActiveComponent(component);
	};

	return (
		<div className={styles.response_area}>
			{activeComponent === 'auto' ? (
				<AutoResponse onVisibilitySwitch={handleVisibilitySwitch} />
			) : (
				<EditorResponse onVisibilitySwitch={handleVisibilitySwitch} />
			)}
		</div>
	);
};

export default Response;
