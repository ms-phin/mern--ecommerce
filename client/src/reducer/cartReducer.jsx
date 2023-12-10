import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products = state.products || []; // Ensure products is not null
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    addProductQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product._id === productId
      );

      if (productToUpdate) {
        productToUpdate.quantity += quantity;
        state.total += productToUpdate.price * quantity;
      }
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, addProductQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
