import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductModel } from "../../../models/responses/ProductModel";

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
    <div className="productDetail__section">
      <div className="row">
        <div className="col-12 mb-3 mt-5" key={productDetail.id}>
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

          <div className="productDetail__section-head">
            <h1>{productDetail.brand}</h1>
          </div>
          <div className="productDetail__section-content">
            <p className="">{productDetail.description}</p>
            <div className="action-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
