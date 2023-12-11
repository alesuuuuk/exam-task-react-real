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

      // products with qty
      let qtyCart = localStorage.getItem('qtyCart')
      qtyCart ? qtyCart = JSON.parse(qtyCart) : qtyCart = []
      
      if (qtyCart.length > 0){
        let index = qtyCart.findIndex(product => product.id == action.payload)
        if (index != -1){
          qtyCart[index].qty++
        }else{
          qtyCart.push(
            {id: action.payload, qty: 1}
          )
        }

      }else{
        qtyCart.push(
          {id: action.payload, qty: 1}
        )
      }

      localStorage.setItem('qtyCart', JSON.stringify(qtyCart))
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
  },
});

// export reducer
export const { addItemToCart, addDataFromLS, removeItemFromCart } =
  cartSlice.actions;
// export slice
export default cartSlice.reducer;