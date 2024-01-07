import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AddProductModel } from "../../../models/requests/AddProduct";

interface AddProductProps {}

const AddProduct: React.FC<AddProductProps> = () => {
  const [product, setProduct] = useState<AddProductModel>({
    title: "",
    description: "",
  });

  const [submittedProduct, setSubmittedProduct] =
    useState<AddProductModel | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const numericValue = value === "" ? undefined : parseFloat(value);
    setProduct((prevProduct) => ({ ...prevProduct, [name]: numericValue }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fileInput = e.target as HTMLInputElement;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const thumbnail = URL.createObjectURL(files[0]);
      setProduct((prevProduct) => ({ ...prevProduct, thumbnail }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedProduct({ ...product });
  };

  return (
    <div className="container">
      <div className="main productContainer">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mt-2 mb-5">Add New Product</h2>
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formCategoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category Name"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBrandName">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Brand Name"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description of Product"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formDiscount">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Percentage of Discount"
                  name="discountPercentage"
                  value={product.discountPercentage?.toString() || ""}
                  onChange={handleNumberChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price of Products"
                  name="price"
                  value={product.price?.toString() || ""}
                  onChange={handleNumberChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Stock "
                  name="stock"
                  value={product.stock?.toString() || ""}
                  onChange={handleNumberChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Rating of Product"
                  name="rating"
                  value={product.rating?.toString() || ""}
                  onChange={handleNumberChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-12 col-sm-12">
              <Form.Group className="mb-3" controlId="formThumbnail">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-12 col-sm-12">
              <Button variant="primary btn-sm" type="submit">
                Submit
              </Button>
              <Link to="/products" className="btn btn-danger btn-sm">
                Cancel
              </Link>
            </div>
          </div>
        </Form>

        {submittedProduct && (
          <div className="">
            <h6 className="text-success text-end bold">Successful ...</h6>
            <div className="row mt-4">
              <div className="col-12">
                <div className="card previewCard">
                  <div className="card-header">
                    <img
                      src={submittedProduct.thumbnail}
                      alt="product-thumbnail"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{submittedProduct.title}</h5>
                    <p className="card-text">{submittedProduct.description}</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="card-text">
                          <strong>Brand:</strong> {submittedProduct.brand}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <strong>Category:</strong> {submittedProduct.category}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <strong>Stock:</strong> {submittedProduct.stock}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <strong>Discount Percentage:</strong>{" "}
                          {submittedProduct.discountPercentage}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <strong>Price:</strong> {submittedProduct.price}
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="card-text">
                          <strong>Rating:</strong> {submittedProduct.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
