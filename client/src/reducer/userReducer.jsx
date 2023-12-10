import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      (state.isFetching = false), (state.currentUser = action.payload);
    },
    loginFailure: (state) => {
      (state.isFetching = false), (state.isError = true);
    },
    logoutClean: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.isError = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutClean } =
  userSlice.actions;
export default userSlice.reducer;
