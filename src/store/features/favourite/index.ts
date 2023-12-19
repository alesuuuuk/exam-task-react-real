import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: any[];
}

const initialState: cartState = {
  items: [],
};

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItemToFavourites: (state, action: PayloadAction<number>) => {
      const productID = action.payload;
      const isFavourites = state.items.indexOf(productID);
      if (isFavourites == -1) {
        state.items.push(action.payload);
      // set to LS
      localStorage.setItem("favourites", JSON.stringify(state.items));
      }else{
      alert("in favourites")
      }
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
    removeAllItemsFromFavourites: (state) =>
    {
      state.items = [];
      localStorage.setItem("favourites", JSON.stringify(state.items));
    }
  },
});

// export reducer
export const { addItemToFavourites, addDataFromLS, removeItemFromFavourites, removeAllItemsFromFavourites } =
  favouriteSlice.actions;
// export slice
export default favouriteSlice.reducer;