import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import { ContactForm, ContactList, Filter } from 'components';
import { useEffect } from 'react';
import { getContactsThunk } from 'store/contactsSlice/contactsThunk';
import { selectError, selectIsLoading } from 'store/selectors';
import { InfinitySpin } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <InfinitySpin color="#0099ff" />}
      {error && <h2 className={styles.errorText}>{error}</h2>}
    </div>
  );
};
