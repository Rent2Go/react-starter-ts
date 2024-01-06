import React, { useEffect } from 'react'
import "./homepage.css"
import axios from 'axios';
import { GetAllProductsModel } from '../../models/responses/GetAllProducts';

type Props = {}

const HomePage = (props: Props) => {
  useEffect(() => {
     fetchProducts();
  }, []);

  const fetchProducts = () => {
       axios.get<GetAllProductsModel>("https://dummyjson.com/products")
       .then(response => {
        console.log(response.data);
       });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">

        </div>
      </div>
    </div>
  );
};

export default HomePage