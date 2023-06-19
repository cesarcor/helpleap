import styles from './box.module.scss';

interface BoxProps {
	min_height?: string | number;
	margin_bottom?: string | number;
	children: React.ReactNode;
}

const Box = (props: BoxProps) => {
	return (
		<div
			className={styles.box}
			style={{ minHeight: props.min_height, marginBottom: props.margin_bottom }}
		>
			{props.children}
		</div>
	);
};

export default Box;
