import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactItem.module.css';
import { filteredContactsSelector } from 'store/selectors';
import { delContactThunk } from 'store/contactsSlice/contactsThunk';

export const ContactItem = () => {
  const filteredContacts = useSelector(filteredContactsSelector);
  const dispatch = useDispatch();

  return (
    <>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <li className={styles.item} key={id}>
            <p>{name + ' ' + phone}</p>
            <button
              className={styles.btnItem}
              type="button"
              onClick={() => dispatch(delContactThunk(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};
