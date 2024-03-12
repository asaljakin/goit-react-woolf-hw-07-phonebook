import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactItem.module.css';
import { filterSelector, contactsSelector } from 'store/selectors';
import { delContact } from 'store/contactsSlice/contactsSlice';

export const ContactItem = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name?.toUpperCase().includes(filter.toUpperCase())
      )
    : contacts;

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <p>{name + ' ' + number}</p>
            <button
              className={styles.btnItem}
              type="button"
              onClick={() => dispatch(delContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};
