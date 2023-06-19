import React from 'react';
import styles from './rounded-image.module.scss';

interface RoundedImageProps {
	width?: string | number;
	height?: string | number;
}

const RoundedImage = (props: RoundedImageProps) => {
	return (
		<img
			src='https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=560&h=750&dpr=2'
			className={styles.rounded_image}
			width={props.width}
			height={props.height}
		/>
	);
};

export default RoundedImage;
