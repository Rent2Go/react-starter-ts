import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../../models/responses/ProductModel";
import "../../../pages/products.css";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
  const [productDetail, setProductDetail] = useState<ProductModel | undefined>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      fetchDetails(params.id);
    }
  }, [params.id]);

  const fetchDetails = async (id: string) => {
    let service: ProductService = new ProductService();
    let response = await service.getById(parseInt(id));
    setProductDetail(response.data);
  };
  return (
    <div className="main">
      <div className="productDetail__section">
        <div className="row">
          <div className="productDetail__section-head mt-2 text-center">
            <h1>{productDetail?.title}</h1>
          </div>
          <div className="col-12 mb-3 mt-2" key={productDetail?.id}>
            <div className="productDetail__section-image_container">
              {productDetail?.product_images ? (
                productDetail.product_images.map((image, index) => (
                  <img key={index} src={image} alt={`Product Image ${index + 1}`} />
                ))
              ) : (
                <div>No images available.</div>
              )}
            </div>

            <div className="productDetail__section-content">
              <p className="">
                <strong>Category:</strong> {productDetail?.category}
              </p>

              <p className="">
                <strong>Brand:</strong> {productDetail?.brand}
              </p>
              <p className="">
                <strong>Description:</strong> {productDetail?.description}
              </p>
              <p className="">
                <strong>Price:</strong> {productDetail?.price}
              </p>
              <p className="">
                <strong>Discount:</strong> {productDetail?.discount_percentage}
              </p>
              <p className="">
                <strong>Stock:</strong> {productDetail?.stock}
              </p>
              <p className="">
                <strong>Rating:</strong> {productDetail?.rating}
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
