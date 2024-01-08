const initialState = {
  cartItems: [],
};

export const cartReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //state.cartItems.push(action.payload);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cardItems: state.cartItems.filter(
          (i: any) => i.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
