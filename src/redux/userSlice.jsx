import { createSlice } from "@reduxjs/toolkit";

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
      .addCase("user/fetchUser/pending", (state, action) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase("user/fetchUser/fulfilled", (state, action) => {
        state.user = action.payload;
        state.userLoading = false;
        state.userError = null;
      })
      .addCase("user/fetchUser/rejected", (state, action) => {
        state.userLoading = false;
        state.userError = action.error.message;
      });
  },
});

export default userSlice.reducer;
