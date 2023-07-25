import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    currentUser: null,
    suggestedUser: null,
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
      state.error = true;
    },
    userSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    updateSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = action.payload;
    },
    updateStart: (state) => {
      state.isFetching = true;
    },
    updateFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    suggestedSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.suggestedUser = action.payload;
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
  updateSuccess,
  updateStart,
  updateFailure,
  suggestedSuccess,
} = userSlice.actions;
export default userSlice.reducer;
