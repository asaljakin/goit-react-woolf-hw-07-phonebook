import styles from './App.module.css';
import { ContactForm, ContactList, Filter } from 'components';

export const App = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
