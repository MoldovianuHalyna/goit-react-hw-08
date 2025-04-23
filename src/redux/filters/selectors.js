import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectFilter } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
