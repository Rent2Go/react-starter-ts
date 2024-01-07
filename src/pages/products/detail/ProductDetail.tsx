import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductModel } from "../../../models/responses/ProductModel";
import "../../../pages/products.css";
import { Link } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<
    ProductModel | undefined
  >();

  useEffect(() => {
    const axiosGet = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    axiosGet();
  }, [id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div className="productDetail__section">
        <div className="row">
        <div className="productDetail__section-head mt-2 text-center">
              <h1>{productDetail.title}</h1>
            </div>
          <div className="col-12 mb-3 mt-2" key={productDetail.id}>
            <div className="productDetail__section-image_container">
              {productDetail.images ? (
                productDetail.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product Image ${index + 1}`}
                  />
                ))
              ) : (
                <div>No images available.</div>
              )}
            </div>

            
            <div className="productDetail__section-content">
              <p className="">
                <strong>Category:</strong> {productDetail.category}
              </p>

              <p className="">
                <strong>Brand:</strong> {productDetail.brand}
              </p>
              <p className="">
                <strong>Description:</strong> {productDetail.description}
              </p>
              <p className="">
                <strong>Price:</strong> {productDetail.price}
              </p>
              <p className="">
                <strong>Discount:</strong> {productDetail.discountPercentage}
              </p>
              <p className="">
                <strong>Stock:</strong> {productDetail.stock}
              </p>
              <p className="">
                <strong>Rating:</strong> {productDetail.rating}
              </p>
              <div className="action-row">
                <Link to={`/products`} className="btn btn-danger btn-sm mr-1">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
