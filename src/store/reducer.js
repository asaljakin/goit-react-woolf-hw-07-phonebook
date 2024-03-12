import { contactsReduser } from './contactsSlice/contactsSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { filterReducer } from './filterSlice/filterSlice';

const persistConfig = {
  key: 'phoneBook',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
