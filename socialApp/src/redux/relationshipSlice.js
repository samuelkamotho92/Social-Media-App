import { createSlice } from "@reduxjs/toolkit";
const followSlice = createSlice({
  name: "follow",
  initialState: {
    follow: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    followStart: (state) => {
      state.isFetching = true;
    },
    followSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.follow = action.payload;
    },
    followFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    createFollowSuccess: (state, action) => {
      state.isFetching = false;
      state.follow.push(action.payload);
      state.error = false;
    },
    removefollowSuccess: (state, action) => {
      state.isFetching = false;
      state.follow.pop(action.payload);
      state.error = false;
    },
  },
});
export const {
  followStart,
  followSuccess,
  followFailure,
  createfollowSuccess,
  removefollowSuccess,
} = followSlice.actions;
export default followSlice.reducer;
