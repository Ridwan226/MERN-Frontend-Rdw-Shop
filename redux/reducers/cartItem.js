import { ADD_TO_CARD, REMOVE_FROM_CARD, CLEAR_CARD } from "../constants";

const cartItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.payload];
    case REMOVE_FROM_CARD:
      return state.filter((cartItem) => cartItem !== action.payload);
    case CLEAR_CARD:
      return (state = []);
  }
};

export default cartItem;
