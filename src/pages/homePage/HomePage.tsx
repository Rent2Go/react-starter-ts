import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
import { GetAllProductsModel } from "../../models/responses/GetAllProducts";
import { ProductModel } from "../../models/responses/ProductModel";

type Props = {};

const HomePage = (props: Props) => {
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
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-3">
            <p>{product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
