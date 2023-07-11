import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    postStart: (state) => {
      state.isFetching = true;
    },
    postSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.posts = action.payload;
    },
    postFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
export const { postStart, postSuccess, postFailure } = postSlice.actions;
export default postSlice.reducer;
