import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authorizationReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    authorization: authorizationReducer,
  },
});
