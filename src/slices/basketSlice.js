import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state, action) => {
      const newBasket = [...state.items];
      const index = newBasket.findIndex(
      (basketeItem) =>{
        return basketeItem.id == action.payload.id
      });

    if (index >= 0) {
      //item exists in the basket
      newBasket.splice(index, 1);

    } else {
      console.warn(
        `Cant remove product ( id:${action.payload.id}) as it is not present `
      );
    }
    state.items = newBasket

    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=> total + item.price,0);

export default basketSlice.reducer;
