import { useState, useEffect, useRef } from 'react';
import styles from './select.module.scss';

interface SelectProps {
	selectTitle: string;
	selectOptions: string[];
}

const Select = (props: SelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('Select');
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.select_field} ref={selectRef}>
			<div
				className={styles.select_field_input}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={styles.select_title}>{props.selectTitle}: </span>
				<span className={styles.select_value}>{selectedOption}</span>
			</div>
			<div
				className={`${styles.options_box} ${
					isOpen ? styles.options_box__open : ''
				}`}
			>
				<ul className={styles.options_list}>
					{props.selectOptions.map((option, index) => (
						<li key={index} onClick={() => setSelectedOption(option)}>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Select;
