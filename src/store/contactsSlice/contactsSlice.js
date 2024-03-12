import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.data.push(payload);
    },
    delContact: (state, { payload }) => {
      state.data = state.data.filter(el => el.id !== payload);
    },
  },
});

export const contactsReduser = contactsSlice.reducer;

export const { addContact, delContact } = contactsSlice.actions;
