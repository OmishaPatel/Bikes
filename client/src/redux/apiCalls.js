import { publicRequest } from "../axiosMethods";
import {
  loginSuccess,
  loginStart,
  loginFailure,
  registerSuccess,
  registerStart,
  registerFailure,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess());
  } catch (err) {
    dispatch(registerFailure());
  }
};
