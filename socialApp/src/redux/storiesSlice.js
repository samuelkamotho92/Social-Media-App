import { createSlice } from "@reduxjs/toolkit";
const storySlice = createSlice({
  name: "stories",
  initialState: {
    stories: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    storyStart: (state) => {
      state.isFetching = true;
    },
    storySuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.stories = action.payload;
    },
    storyFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    createStorySuccess: (state, action) => {
      state.isFetching = false;
      state.stories.push(action.payload);
      state.error = false;
    },
  },
});
export const { storyStart, storySuccess, storyFailure, createStorySuccess } =
  storySlice.actions;
export default storySlice.reducer;
