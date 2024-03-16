import { contactsReduser } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const reducer = {
  contacts: contactsReduser,
  filter: filterReducer,
};
