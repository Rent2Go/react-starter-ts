import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { GetAllProductsModel } from "../../models/responses/GetAllProducts";
import { ProductModel } from "../../models/responses/ProductModel";
import { ProductCard } from "../../components";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get<GetAllProductsModel>("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  };
  return (
    <div className="productContainer">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-xl-3 col-l-4 col-md-6 col-sm-12">
            <ProductCard product={product} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;