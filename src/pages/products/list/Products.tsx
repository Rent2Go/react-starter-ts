import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetAllProductsModel } from "../../../models/responses/GetAllProducts";
import { ProductModel } from "../../../models/responses/ProductModel";
import { ProductCard } from "../../../components";
import { Link } from "react-router-dom";
import "../../../pages/products.css";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [deletedIds]);

  const fetchProducts = () => {
    axios
      .get<GetAllProductsModel>("https://dummyjson.com/products")
      .then((response) => {
        const filteredProducts = response.data.products.filter(
          //if clicked to delete, insert into a deleted list..
          (product) => !deletedIds.includes(product.id) // if deletedProducts equal to productList, don't list them..
        );
        setProducts(filteredProducts);
      });
  };
  const [deletedProductIds, setDeletedProductIds] = useState<number[]>([]);

  const handleDelete = (productId: number) => {
    // insert to deleted List
    setDeletedIds((prevIds) => [...prevIds, productId]);
    console.log("Deleted Product:", productId);
  };

  const filteredProducts = products.filter(
    (product) => !deletedProductIds.includes(product.id)
  );
  return (
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
          <div key={product.id} className="col-xl-3 col-l-4 col-md-6 col-sm-12">
            <ProductCard product={product} onDelete={handleDelete} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
