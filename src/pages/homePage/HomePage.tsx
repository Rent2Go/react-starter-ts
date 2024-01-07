import React, { useEffect, useState } from "react";
import "./homepage.css";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="main p-5 m-0-auto">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header text-center">
              <h5>Product List</h5>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header text-center">
              <h5>Category List</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
