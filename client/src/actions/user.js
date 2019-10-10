import axios from "axios";

import { LOGIN_USER } from "./types";

import { USER_ROUTE } from "../components/utils/misc";

export const loginUser = data => {
  const res = axios.post(`${USER_ROUTE}/login`, data).then(res => res.data);

  return {
    type: LOGIN_USER,
    payload: res
  };
};
