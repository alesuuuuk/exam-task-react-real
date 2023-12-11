import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: any[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItemToFavourites: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      console.log(state.items)
      // set to LS
      localStorage.setItem("favourites", JSON.stringify(state.items));
    },
    removeItemFromFavourites: (state, action: PayloadAction<number>) => {
      const productID = action.payload;
      // check if exist product ID in state
      const isExist = state.items.indexOf(productID);
      // cond
      if (isExist != -1) {
        state.items = state.items.filter((item) => item != productID);
        localStorage.setItem("favourites", JSON.stringify(state.items));
      } else {
        alert("Product doesn't exist in favourites!");
      }
    },
    addDataFromLS: (state, action: PayloadAction<[]>) => {
      state.items = [...action.payload];
    },
  },
});

// export reducer
export const { addItemToFavourites, addDataFromLS, removeItemFromFavourites } =
  cartSlice.actions;
// export slice
export default cartSlice.reducer;