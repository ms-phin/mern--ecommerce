import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://ecommerce-app-f1ic.onrender.com/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
