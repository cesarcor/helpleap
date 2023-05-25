import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
	text: string;
	type: string;
	onClickAction?: () => void;
}

const Button = (props: ButtonProps) => {
	const buttonType = classNames(
		{ [styles.button__default]: props.type === 'default' },
		{ [styles.button__white]: props.type === 'white' }
	);

	return (
		<button
			className={`${styles.button} ${buttonType}`}
			onClick={props.onClickAction}
		>
			{props.text}
		</button>
	);
};

export default Button;
