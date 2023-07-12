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
} from "./userSlice";

import { postStart, postSuccess, postFailure } from "./postSlice";

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

export const getPosts = async (dispatch) => {
  dispatch(postStart());
  try {
    const { data } = await axios.get(`${domain}/posts`);
    console.log(data);
    dispatch(postSuccess(data));
  } catch (err) {
    dispatch(postFailure());
  }
};
