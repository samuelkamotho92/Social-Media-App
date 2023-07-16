import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    userSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerFailure,
  registerSuccess,
  userSuccess,
} = userSlice.actions;
export default userSlice.reducer;
