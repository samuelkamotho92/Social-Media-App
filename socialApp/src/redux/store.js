import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import commentSlice from "./commentSlice";
import storiesSlice from "./storiesSlice";
import likesSlice from "./likesSlice";
import relationshipSlice from "./relationshipSlice";
import chatSlice from "./chatSlice";
import messageSlice from "./messageSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  post: postSlice,
  comment: commentSlice,
  story: storiesSlice,
  likes: likesSlice,
  relationship: relationshipSlice,
  chat: chatSlice,
  message: messageSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
