import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductModel } from "../../models/responses/ProductModel";

type Props = {
  product: ProductModel;
};

const ProductCard = (props: Props) => {
  return (
    <div className="card">
      <img src={props.product.thumbnail} />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link
          to={"/products?id=" + props.product.id}
          className="btn btn-primary"
        >
          Detail
        </Link>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
