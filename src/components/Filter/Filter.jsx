import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { selectFilters } from 'store/selectors';
import { changeFilter } from 'store/filterSlice/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Search name"
        title="Enter a name to search"
        value={filter}
        onChange={handleChange}
      ></input>
    </label>
  );
};
