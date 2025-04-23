import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://68065077e81df7060eb6b374.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/contacts/`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      axios.delete(`/contacts/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
