import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
	text: string;
	type: string;
	onClick?: () => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
	const buttonType = classNames(
		{ [styles.button__default]: type === 'default' },
		{ [styles.button__white]: type === 'white' }
	);

	return (
		<button className={`${styles.button} ${buttonType}`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
