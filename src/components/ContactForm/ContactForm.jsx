import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'store/selectors';
import { addContactThunk } from 'store/contactsSlice/contactsThunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const hasContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContact) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactThunk({ name, phone, id: nanoid() }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleChangeName = e => setName(e.target.value);

  const handleChangeNumber = e => setPhone(e.target.value);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name Surname"
          pattern="^[a-zA-Zа-яА-ЯҐЄІЇіїє]+(([' \-][a-zA-Zа-яА-ЯҐЄІЇіїє ])?[a-zA-Zа-яА-ЯҐЄІЇіїє]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeName}
          required
        ></input>
      </label>

      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleChangeNumber}
          required
        ></input>
      </label>
      <button className={styles.btnAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};
