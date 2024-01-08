import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Cart = (props: Props) => {
  const cartState = useSelector((state: any) => state.cart);
  console.log(cartState.cartItems);
  return (
    <div className="container mt-5 ">
      {cartState.cartItems.map((product: any) => (
        <div>
          <p>{product.title}</p>
          <p>{product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
