import React, { useEffect, useState } from "react";
import { Header, ProductCard } from "../../../components";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import { GetAllProductsModel } from "../../../models/responses/GetAllProducts";

import "../../../pages/products.css";
import { ProductModel } from "../../../models/responses/ProductModel";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [deletedIds]);

  const fetchProducts = () => {
    let service = new ProductService();
    service.getAll().then((response) => {
      const productData = Array.isArray(response.data) ? response.data : [];
      setProducts(productData);
      console.log("data", productData);
    });
  };
  const [deletedProductIds, setDeletedProductIds] = useState<number[]>([]);

  const handleDelete = (productId: number) => {
    // insert to deleted List
    setDeletedIds((prevIds) => [...prevIds, productId]);
    console.log("Deleted Product:", productId);
    alert("Deleted Product.. ID:" + productId);
  };

  return (
    <>
      <Header />
      <div className="productContainer">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end mb-5">
              <Link to={"/addProduct"} className="btn btn-secondary">
                Add New Product
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-l-4 col-md-6 col-sm-12"
            >
              <ProductCard product={product} onDelete={handleDelete} />{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
