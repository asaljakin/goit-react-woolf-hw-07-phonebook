import axios from 'axios';

axios.defaults.baseURL =
  'https://65f07a6cda8c6584131bdea0.mockapi.io/contacts/';
axios.defaults.headers.common['accept'] = 'application/json';

export const getContactsApi = async () => {
  const { data } = await axios('contacts');
  return data;
};

export const delContactApi = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export const addContactApi = async item => {
  const { data } = await axios.post(`contacts`, item);
  return data;
};
