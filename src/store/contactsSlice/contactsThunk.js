import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, delContactApi, getContactsApi } from 'api/mockApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  (_, thunkAPI) => {
    try {
      const response = getContactsApi();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  (contact, thunkAPI) => {
    try {
      const response = addContactApi(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContactThunk = createAsyncThunk(
  'contacts/delContact',
  (id, thunkAPI) => {
    try {
      const response = delContactApi(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
