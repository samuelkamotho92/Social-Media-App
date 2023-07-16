import { createSlice } from "@reduxjs/toolkit";
const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likes: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    likesStart: (state) => {
      state.isFetching = true;
    },
    likesSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.likes = action.payload;
    },
    likesFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    createlikesSuccess: (state, action) => {
      state.isFetching = false;
      state.likes.push(action.payload);
      state.error = false;
    },
    removelikesSuccess: (state, action) => {
      state.isFetching = false;
      state.likes.pop(action.payload);
      state.error = false;
    },
  },
});
export const {
  likesStart,
  likesSuccess,
  likesFailure,
  createlikesSuccess,
  removelikesSuccess,
} = likesSlice.actions;
export default likesSlice.reducer;
