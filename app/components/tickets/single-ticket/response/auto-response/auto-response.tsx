import styles from './auto-response.module.scss';
import Button from '../../../../common-ui/button/button';
import Recipient from '../recipient/recipient';

type VisibilitySwitchHandler = (visibility: string) => void;

const AutoResponse = ({
	onVisibilitySwitch,
}: {
	onVisibilitySwitch: VisibilitySwitchHandler;
}) => {
	const handleVisibilitySwitch = () => {
		onVisibilitySwitch('editor');
	};

	return (
		<div className={styles.auto_response}>
			<Recipient />

			<div className={styles.auto_response_status}>
				<div>
					<span>
						<span>Response Ready</span> <span>[Sending in 12:12] </span>
					</span>
					<Button text='Send Now' type='white' />
				</div>
				<Button
					text='Edit Response'
					type='white'
					onClick={handleVisibilitySwitch}
				/>
			</div>

			<div className={styles.auto_response_content}>
				<p>Certe, inquam,</p>
				<p>
					pertinax non ero tibique, si ob rem voluptas assumenda est, ut
					doleamus? pertinax non ero tibique, si ob rem voluptas assumenda est,
					ut doleamus? pertinax non ero tibique, si ob rem voluptas assumenda
				</p>
				<p>
					pertinax non ero tibique, si ob rem voluptas assumenda est, ut
					doleamus? pertinax non ero tibique, si ob rem voluptas assumenda est,
					ut doleamus? pertinax non ero tibique, si ob rem voluptas assumenda
				</p>
			</div>
		</div>
	);
};

export default AutoResponse;
