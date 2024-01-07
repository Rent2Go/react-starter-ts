import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div className="container">
      <div className="main productContainer">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mt-2 mb-5">Update Product</h2>
          </div>
        </div>
        <Form>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Category Name" />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Brand Name" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description of Product"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Percentage of Discount"
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price of Products"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" placeholder="Enter Stock " />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Rating of Product"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Choose a Thumbnail of Product"
                />
              </Form.Group>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-12 col-sm-12">
              {" "}
              <Button variant="primary btn-sm" type="submit">
                Submit
              </Button>
              <Link to="/products" className="btn btn-danger btn-sm">
                Cancel
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
