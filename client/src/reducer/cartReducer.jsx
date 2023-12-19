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

    // addProductQuantity: (state, action) => {
    //   const { productId, quantity } = action.payload;
    //   const updatedProducts = state.products.map((product) => {
    //     if (product._id === productId) {
    //       const newQuantity = product.quantity + quantity;
    //       if (newQuantity > 0) {
    //         return {
    //           ...product,
    //           quantity: newQuantity,
    //         };
    //       }
    //       return null;
    //     }
    //     return product;
    //   });

    //   state.products = updatedProducts.filter(Boolean); // Filter out null values
    //   state.quantity = state.products.length;
    //   state.total = state.products.reduce(
    //     (total, product) => total + product.price * product.quantity,
    //     0
    //   );
    // },
    addProductQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      const productToUpdate = state.products[index];
      console.log(index);
      if (productToUpdate) {
        const newQuantity = productToUpdate.quantity + quantity;
        if (newQuantity > 0) {
          productToUpdate.quantity = newQuantity;
          state.total += productToUpdate.price * quantity;
        } else {
          state.products = state.products.filter(
            (_, productIndex) => productIndex !== index
          );
          state.quantity -= 1;
          state.total -= productToUpdate.price * productToUpdate.quantity;
        }
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
