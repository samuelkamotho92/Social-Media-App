import axios from "axios";
import { domain } from "../utils/utils";
export const registerUser = async (data) => {
  axios.post(`${domain}/auth/register`, data);
  console.log(data);
};
