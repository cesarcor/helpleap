import styles from './box.module.scss';

interface BoxProps {
	min_height: string | number;
	children?: React.ReactNode;
}

const Box = (props: BoxProps) => {
	return (
		<div className={styles.box} style={{ minHeight: props.min_height }}>
			{props.children}
		</div>
	);
};

export default Box;
