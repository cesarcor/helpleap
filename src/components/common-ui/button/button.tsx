import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
	text: string;
	type: string;
}

const Button = (props: ButtonProps) => {
	const buttonType = classNames(
		{ [styles.button__default]: props.type === 'default' },
		{ [styles.button__white]: props.type === 'white' }
	);

	return (
		<button className={`${styles.button} ${buttonType}`}>{props.text}</button>
	);
};

export default Button;
