import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  restaurant: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      let found = false;
      for (key in state.items) {
        if (state.items[key].id == action.payload.id) {
          state.items[key].quantity = state.items[key].quantity + 1;
          found = true;
          break;
        }
      }
      if (!found) {
        state.items.push({ quantity: 1, ...action.payload });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        if (item.id == action.payload) {
          if (item.quantity > 1) {
            item.quantity--;
            return true;
          }
        } else {
          return item;
        }
      });
    },
    resetItem: (state, action) => {
      state.items = [];
    },
    addRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { addItem, removeItem, resetCart, addRestaurant } =
  cartSlice.actions;
export default cartSlice.reducer;

/**
 *
 *  item:[
 *    {
 *      id:"123",
 *      Quantity: "2"
 *    },
 *    {
 *      id:"124",
 *      quntity: "1"
 *    }
 *  ]
 *
 *
 */
