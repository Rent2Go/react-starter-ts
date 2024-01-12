import React from "react";
import { useSelector } from "react-redux";
import { ProductModel } from "../../models/responses/ProductModel";

type Props = {};

const Cart: React.FC<Props> = (props) => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  console.log(cartItems);
  
  return (
    <div className="container mt-5 ">
      {cartItems.map((product: any, index:number) => (
        <div key={index}>
          <p>{product.product.title}</p>
          <p>{product.product.stock}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
