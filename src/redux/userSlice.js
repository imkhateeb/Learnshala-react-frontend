import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./reducers/getUser";

const initialState = {
  user: null,
  userLoading: false,
  userError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userLoading = false;
        state.userError = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.error.message;
      });
  },
});

export default userSlice.reducer;
