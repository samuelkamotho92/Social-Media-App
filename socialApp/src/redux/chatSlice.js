import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
  name: "chats",
  initialState: {
    chats: null,
    chatUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    chatStart: (state) => {
      state.isFetching = true;
    },
    chatSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.chats = action.payload;
    },
    chatFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    createChatSuccess: (state, action) => {
      state.isFetching = false;
      state.chats.push(action.payload);
      state.error = false;
    },
    chatUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.chatUser = action.payload;
    },
    chatUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
export const {
  chatStart,
  chatSuccess,
  chatFailure,
  createChatSuccess,
  chatUserSuccess,
  chatUserFailure,
} = chatSlice.actions;
export default chatSlice.reducer;
