import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const userId = localStorage.getItem("userId");
  const userToken = localStorage.getItem("userToken");
  api;
  const url = `${apiUrl}`;

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return response.data;
});
