const initialState = {
  cartItems: [],
};

export const cartReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        carItems: state.cartItems.filter(
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
