import React, { useEffect } from 'react'
import "./homepage.css"
import axios from 'axios';

type Props = {}

const HomePage = (props: Props) => {
  useEffect(() => {
     fetchProducts();
  }, []);

  const fetchProducts = () => {
       axios.get("https://dummyjson.com/products");
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