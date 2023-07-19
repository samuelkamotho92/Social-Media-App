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
    createPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.push(action.payload);
      state.error = false;
    },
    deletePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.splice(
        state.posts.findIndex((post) => post.id === action.payload),
        1
      );
    },
    deletePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  postStart,
  postSuccess,
  postFailure,
  createPostSuccess,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
} = postSlice.actions;
export default postSlice.reducer;
