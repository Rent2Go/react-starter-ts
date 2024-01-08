import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductModel } from "../../models/responses/ProductModel";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

type Props = {
  product: ProductModel;
  onDelete: (productId: number) => void;
};
function truncateString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

const ProductCard = (props: Props) => {
  const handleDelete = () => {
    props.onDelete(props.product.id);
  };

  const ProductCard = (props: Props) => {
    const dispatch = useDispatch();
  
    const addProductToCard = () => {
      dispatch(addToCart(props.product));
    };
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
        <div className="">
          <Link
            to={"/product-detail/" + props.product.id}
            className="btn btn-primary btn-sm mr-1"
          >
            Detail
          </Link>
          <Link
            to={`/updateProduct/${props.product.id}`}
            className="btn btn-warning btn-sm mr-1"
          >
            Update
          </Link>
          <button className="btn btn-danger btn-sm " onClick={handleDelete}>
            Delete
          </button>
          <button onClick={addProductToCard} className="btn btn-success btn-sm " onClick={handleDelete}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
