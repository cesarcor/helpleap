'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import Badge from '../badge/badge';
import styles from './select.module.scss';

interface SelectProps {
	selectTitle: string;
	selectOptions: string[];
	initialOption: string;
	hasSearch?: boolean;
	isMultiselect?: boolean;
}

const Select = ({
	selectTitle,
	selectOptions,
	initialOption,
	hasSearch,
	isMultiselect,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string | string[]>([
		initialOption,
	]);
	const [filteredOptions, setFilteredOptions] =
		useState<string[]>(selectOptions);
	const selectRef = useRef<HTMLDivElement>(null);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.target.value;
		const filtered = selectOptions.filter((option) =>
			option.toLowerCase().includes(input.toLowerCase())
		);
		setFilteredOptions(filtered);
	};

	const handleOptionClick = (option: string) => {
		if (!isMultiselect) {
			setSelectedOption(option);
		} else {
			if (!selectedOption.includes(option)) {
				setSelectedOption([...selectedOption, option]);
			}
		}
		setIsOpen(false);
	};

	const handleBadgeClose = (option: string) => {
		if (isMultiselect) {
			const updatedOptions = (selectedOption as string[]).filter(
				(selected: string) => selected !== option
			);
			setSelectedOption(updatedOptions);
		}
	};

	const outputSelectedOption = () => {
		return isMultiselect
			? (selectedOption as string[]).map((option: string) => (
					<Badge
						key={option}
						text={option}
						hasClose
						onClose={handleBadgeClose}
					/>
			  ))
			: selectedOption;
	};

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
		<div
			className={`${styles.select_field} ${
				isMultiselect ? styles.is_multiselect : ''
			}`}
			ref={selectRef}
		>
			<div
				className={styles.select_field_input}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={styles.select_title}>{selectTitle}: </span>
				<span className={styles.select_value}>{outputSelectedOption()}</span>
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
