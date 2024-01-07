import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductModel } from "../../models/responses/ProductModel";

type Props = {
  product: ProductModel;
};
function truncateString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

const ProductCard = (props: Props) => {
  return (
    <div className="card">
      <img src={props.product.thumbnail} alt="product_image" />
      <div className="card-body">
        <h5 className="card-title">
          {truncateString(props.product.title, 26)}
        </h5>
        <p className="card-text">
          {truncateString(props.product.description, 58)}
        </p>
        <Link
          to={"/products?id=" + props.product.id}
          className="btn btn-primary btn-sm mr-1"
        >
          Detail
        </Link>
        <button className="btn btn-danger btn-sm ">Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
