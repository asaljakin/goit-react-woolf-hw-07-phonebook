import { ContactItem } from 'components';
import styles from './ContactList.module.css';

export const ContactList = () => {
  return (
    <ul className={styles.ul}>
      <ContactItem />
    </ul>
  );
};
