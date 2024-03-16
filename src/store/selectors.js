import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilters = state => state.filter.value;

export const filteredContactsSelector = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    if (filter) {
      return contacts?.filter(({ name }) =>
        name?.toLowerCase().includes(filter?.toLowerCase())
      );
    }
    return contacts;
  }
);
