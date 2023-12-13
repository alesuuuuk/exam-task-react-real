import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: any[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      console.log(state.items)
      // set to LS
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const productID = action.payload;
      // check if exist product ID in state
      const isExist = state.items.indexOf(productID);
      // cond
      if (isExist != -1) {
        state.items = state.items.filter((item) => item != productID);
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        alert("Product doesn't exist in cart!");
      }
    },
    addDataFromLS: (state, action: PayloadAction<[]>) => {
      state.items = [...action.payload];
    },
    removeAllItemsFromCart: (state) =>{
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  },
});

// export reducer
export const { addItemToCart, addDataFromLS, removeItemFromCart, removeAllItemsFromCart } =
  cartSlice.actions;
// export slice
export default cartSlice.reducer;