import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Cart = (props: Props) => {
  const {cart} = useSelector((state: any) => state);
  console.log(cart);
  return (
    <div className="container mt-5 ">
      {cart.map((product: any) => (
        <div>
          <p>{product.title}</p>
          <p>{product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
