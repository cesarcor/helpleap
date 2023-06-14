import { useState, useEffect, useRef, ChangeEvent } from 'react';
import styles from './select.module.scss';

interface SelectProps {
	selectTitle: string;
	selectOptions: string[];
	hasSearch?: boolean;
}

const Select = ({ selectTitle, selectOptions, hasSearch }: SelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('Select');
	const [filteredOptions, setFilteredOptions] =
		useState<string[]>(selectOptions);
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

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.target.value;
		const filtered = selectOptions.filter((option) =>
			option.toLowerCase().includes(input.toLowerCase())
		);
		setFilteredOptions(filtered);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className={styles.select_field} ref={selectRef}>
			<div
				className={styles.select_field_input}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={styles.select_title}>{selectTitle}: </span>
				<span className={styles.select_value}>{selectedOption}</span>
			</div>
			<div
				className={`${styles.options_box} ${
					isOpen ? styles.options_box__open : ''
				}`}
			>
				{hasSearch && (
					<div className={styles.options_search}>
						<input
							type='text'
							className={styles.options_search__input}
							placeholder='Search'
							onChange={handleInputChange}
						/>
					</div>
				)}
				<ul className={styles.options_list}>
					{filteredOptions.map((option, index) => (
						<li key={index} onClick={() => handleOptionClick(option)}>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Select;
