import axios from "axios";
import { domain } from "../utils/utils";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure, logout } from "./userSlice";
export const registerUser = async (user) => {
  console.log(user);
  const { data } = await axios.post(`${domain}/auth/register`, user);
  console.log(data);
  if (data.status === "success") {
    alert("logged  in successfully");
    toast.success(`successfully Registered,head to login page`, {
      position: "top-center",
    });
    // <Navigate to="/login" />;
  } else {
    alert("registration failed,try again later");
    toast.warning(`error while registering the user`, {
      position: "top-center",
    });
  }
};

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${domain}/auth/login`, user);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
