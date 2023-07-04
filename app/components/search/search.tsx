import styles from './search.module.scss';
import SearchSVG from '../svgs/common/search-svg';

const Search = () => {
	return (
		<div className={styles.search_form}>
			<input
				type='text'
				className={styles.search_input}
				placeholder='Search...'
			/>
			<SearchSVG />
		</div>
	);
};

export default Search;
