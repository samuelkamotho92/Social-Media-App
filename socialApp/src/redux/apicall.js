import axios from "axios";
import { domain } from "../utils/utils";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerFailure,
  registerSuccess,
  registerStart,
  userSuccess,
  updateSuccess,
  updateStart,
  updateFailure,
} from "./userSlice";

import {
  storyStart,
  storySuccess,
  storyFailure,
  createStorySuccess,
} from "./storiesSlice";

import {
  postStart,
  postSuccess,
  postFailure,
  createPostSuccess,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
} from "./postSlice";

import {
  commentStart,
  commentSuccess,
  commentFailure,
  createCommentSuccess,
} from "./commentSlice";

import {
  likesStart,
  likesSuccess,
  likesFailure,
  createlikesSuccess,
  removelikesSuccess,
} from "./likesSlice";

import {
  followStart,
  followFailure,
  followSuccess,
  createFollowSuccess,
  removefollowSuccess,
} from "./relationshipSlice";

import {
  chatStart,
  chatSuccess,
  chatFailure,
  createChatSuccess,
  chatUserSuccess,
  chatUserFailure,
} from "./chatSlice";

import {
  messageStart,
  messageSuccess,
  messageFailure,
  createmessageSuccess,
} from "./messageSlice";
export const registerUser = async (dispatch, user) => {
  console.log(user);
  dispatch(registerStart());
  try {
    const { data } = await axios.post(`${domain}/auth/register`, user);
    dispatch(registerSuccess(data));
    console.log(data);
    if (data.status === "success") {
      alert("logged  in successfully");
      toast.success(`successfully Registered,head to login page`, {
        position: "top-center",
      });
    } else {
      alert("registration failed,try again later");
      toast.warning(`error while registering the user`, {
        position: "top-center",
      });
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${domain}/auth/login`, user);
    console.log(data);
    dispatch(loginSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

export const logOut = async (dispatch) => {
  dispatch(logout());
};

export const getPosts = async (dispatch, token) => {
  dispatch(postStart());
  try {
    const { data } = await axios.post(`${domain}/posts/getposts`, token);
    dispatch(postSuccess(data));
  } catch (err) {
    dispatch(postFailure());
  }
};

export const deletePost = async (id, dispatch, token) => {
  console.log(id, token);
  dispatch(deletePostStart());
  try {
    await axios.post(`${domain}/posts/deletePost/${id}`, { token });
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure(err));
  }
};

export const getComments = async (dispatch, id) => {
  dispatch(commentStart());
  console.log(id);
  try {
    const { data } = await axios.get(`${domain}/comments/${id}`);
    console.log(data);
    dispatch(commentSuccess(data));
  } catch (err) {
    dispatch(commentFailure());
  }
};

export const createStory = async (dispatch, data) => {
  console.log(data, "stories info");
  dispatch(storyStart());
  try {
    const dataVal = await axios.post(`${domain}/stories/`, data);
    console.log(dataVal.data.status);
    if (dataVal.data.status == "success") {
      toast.success(`Story uploaded`, {
        position: "top-center",
      });
    } else {
      toast.warning(`story not uploaded`, {
        position: "top-center",
      });
    }
    dispatch(createStorySuccess(data));
  } catch (err) {
    dispatch(storyFailure());
  }
};
export const createComment = async (dispatch, data) => {
  console.log(data, "comment info");
  dispatch(commentStart());
  try {
    const dataVal = await axios.post(`${domain}/comments/`, data);
    console.log(dataVal.data.status);
    if (dataVal.data.status == "success") {
      toast.success(`Comment uploaded`, {
        position: "top-center",
      });
    } else {
      toast.warning(`comment not uploaded`, {
        position: "top-center",
      });
    }
    dispatch(createCommentSuccess(data));
  } catch (err) {
    dispatch(commentFailure());
  }
};

export const createPost = async (dispatch, data) => {
  console.log(data, "post info");
  dispatch(postStart());
  try {
    const dataVal = await axios.post(`${domain}/posts/createpost/`, data);
    console.log(dataVal.data.status);
    if (dataVal.data.status == "success") {
      toast.success(`Post uploaded`, {
        position: "top-center",
      });
    } else {
      toast.warning(`Post not uploaded`, {
        position: "top-center",
      });
    }
    dispatch(createPostSuccess(data));
  } catch (err) {
    dispatch(postFailure());
  }
};

export const getStories = async (dispatch) => {
  dispatch(storyStart());
  try {
    const { data } = await axios.get(`${domain}/stories/`);
    dispatch(storySuccess(data));
  } catch (err) {
    dispatch(storyFailure());
  }
};

export const getlikePost = async (dispatch, id) => {
  dispatch(likesStart());
  try {
    const likes = [];
    const { data } = await axios.get(`${domain}/likes/${id}`);
    likes.push(data);
    console.log(likes);
    console.log(data, `number of  post for ${id}`);
    dispatch(likesSuccess(data));
    return { data, likes };
  } catch (err) {
    dispatch(likesFailure());
  }
};

export const createlikepost = async (dispatch, data) => {
  const dataVal = await axios.post(`${domain}/likes/`, data);
  console.log(dataVal);
  if (dataVal.data.status == "success") {
    toast.success(`Post Liked `, {
      position: "top-center",
    });
    console.log("liked post");
  } else {
    toast.warning(`Post not liked`, {
      position: "top-center",
    });
  }
};

export const deletelikepost = async (dispatch, like, id) => {
  console.log(id);
  const { data } = await axios.post(`${domain}/likes/${id}`, like);
  // console.log(dataVal);
  if (data.status == "success") {
    toast.success(`Post Unliked `, {
      position: "top-center",
    });
    console.log("liked post");
  } else {
    toast.warning(`Something went wrong`, {
      position: "top-center",
    });
  }
};

export const getuser = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`${domain}/user/${id}`);
    dispatch(userSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

export const getRelationship = async (dispatch, id) => {
  dispatch(followStart());
  try {
    const { data } = await axios.get(`${domain}/relationships/${id}`);
    console.log(data);
    dispatch(followSuccess(data));
  } catch (err) {
    dispatch(followFailure());
  }
};

export const createRelationship = async (dispatch, data) => {
  console.log(data);
  try {
    const dataval = await axios.post(`${domain}/relationships/`, data);
    console.log(dataval.data.status);
    if (dataval.data.status == "followed") {
      toast.info(` followed `, {
        position: "top-center",
      });
    } else {
      toast.warning(`Something went wrong`, {
        position: "top-center",
      });
    }
    dispatch(createFollowSuccess(1));
  } catch (err) {
    dispatch(followFailure());
  }
};

export const deleteRelationship = async (dispatch, data) => {
  console.log(data);
  try {
    const dataval = await axios.post(`${domain}/relationships/unfollow`, data);
    console.log(dataval.data.status);
    if (dataval.data.status == "unfollowed") {
      toast.info(` Unfollowed `, {
        position: "top-center",
      });
    } else {
      toast.warning(`Something went wrong`, {
        position: "top-center",
      });
    }
    dispatch(removefollowSuccess());
  } catch (err) {
    dispatch(followFailure());
  }
};

export const updatedUser = async (dispatch, user, dataVal) => {
  const id = user.id;
  console.log(id, dataVal);
  dispatch(updateStart());
  try {
    const { data } = await axios.put(`${domain}/user/${id}`, dataVal);
    console.log(data);
    dispatch(updateSuccess(dataVal));
    if (data.status === "success") {
      toast.success(`Updated`, {
        position: "top-center",
      });
    } else {
      toast.warning(`failed to update`, {
        position: "top-center",
      });
    }
  } catch (err) {
    dispatch(updateFailure());
  }
};

export const getChats = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`${domain}/chat/${id}`);
    console.log(data.data);
    dispatch(chatSuccess(data.data));
  } catch (err) {
    dispatch(chatFailure(err));
  }
};

export const chatUser = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`${domain}/user/${id}`);
    console.log(data.user);
    dispatch(chatUserSuccess(data.user));
  } catch (err) {
    dispatch(chatUserFailure(err));
  }
};

export const getMessage = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`${domain}/messages/${id}`);
    console.log(data.data);
    dispatch(messageSuccess(data.data));
  } catch (err) {
    dispatch(messageFailure(err));
  }
};
