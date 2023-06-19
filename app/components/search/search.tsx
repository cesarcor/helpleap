import styles from './search.module.scss';

const Search = () => {
	return (
		<div className={styles.search_form}>
			<input
				type='text'
				className={styles.search_input}
				placeholder='Search...'
			/>
		</div>
	);
};

export default Search;
