import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
