import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  delContactThunk,
  getContactsThunk,
} from './contactsThunk';
import {
  handleAddContact,
  handleDelContact,
  handleFulfilledContacts,
  handlePending,
  handleRejected,
} from './contactsHandlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(delContactThunk.fulfilled, handleDelContact)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;

export const { addContact, delContact } = contactsSlice.actions;
