import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { ...state, amount: 0, cartItems: [] };
    },
    removeItem: (state, { payload: itemId }) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
      };
    },
    increase: (state, { payload: itemId }) => {
      const amount = state.cartItems.find((item) => item.id === itemId);
      amount.amount += 1;
      state.amount += 1;
    },
    decrease: (state, { payload: itemId }) => {
      const amount = state.cartItems.find((item) => item.id === itemId);
      amount.amount -= 1;
      state.amount -= 1;
    },

    calculateAmount: (state) => {
      return {
        ...state,
        amount: state.cartItems.reduce((accumulator, { amount }) => {
          return accumulator + amount;
        }, 0),
      };
    },

    calculateTotal: (state) => {
      return {
        ...state,
        total: state.cartItems.reduce((accumulator, { price, amount }) => {
          return accumulator + price * amount;
        }, 0),
      };
    },
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateAmount,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
