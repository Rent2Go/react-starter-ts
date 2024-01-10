import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import { ProductModel } from "../../models/responses/ProductModel";
import { useDispatch } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import { FaEye } from "react-icons/fa";
import { Cart } from "../../pages";
import { addToCart } from "../../toolkitStore/slices/cartSlice";

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

const ProductCard = (props: Props): JSX.Element => {
  const handleDelete = () => {
    props.onDelete(props.product.id);
  };

  const dispatch = useDispatch();

  const addProductToCard = () => {
    dispatch(addToCart(props.product));
  };
  return (
    <div>
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
              aria-label="Detail"
            >
              <FaEye />
            </Link>
            <Link
              to={`/updateProduct/${props.product.id}`}
              className="btn btn-warning btn-sm mr-1"
              aria-label="Update"
            >
              <CiEdit />
            </Link>
            <button
              type="button"
              className="btn btn-danger btn-sm "
              onClick={handleDelete}
              aria-label="Delete"
            >
              <MdDelete />
            </button>
            <button
              type="button"
              onClick={addProductToCard}
              className="btn btn-success btn-sm "
              aria-label="Add to Cart"
            >
              <IoMdCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
