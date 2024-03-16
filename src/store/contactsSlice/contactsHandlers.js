export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts = payload;
  state.isLoading = false;
};
export const handleAddContact = (state, { payload }) => {
  state.contacts.push(payload);
  state.isLoading = false;
};
export const handleDelContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(el => el.id !== payload.id);
  state.isLoading = false;
};
export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};
