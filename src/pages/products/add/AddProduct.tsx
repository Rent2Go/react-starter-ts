import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AddProductModel } from "../../../models/requests/AddProduct";
import { FormikInput } from "../../../components";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";

const FileInput: React.FC<FieldAttributes<any>> = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [fileInfo, setFileInfo] = useState<File | null>(null);

  return (
    <>
      <input
        {...field}
        {...props}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            setFileInfo(files[0]);
          }
          field.onChange(e);
        }}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

interface AddProductProps {}

const AddProduct: React.FC<AddProductProps> = () => {
  const [product, setProduct] = useState<AddProductModel>({
    title: "",
    description: "",
  });
  const initialValues = {
    product:"",
    category:"",
    title: "",
    description: "",
    discount:0,
    price: 0,
    stock: 0,
    rating:0
  };

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
   

        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values);
          }}
        
        >
          <Form>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <FormikInput
                  name="category"
                  label="Category Name"
                  placeHolder="Please Enter the Category Name"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <FormikInput
                  name="title"
                  label="Product Name"
                  placeHolder="Please Enter the Product Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              <FormikInput
              name="brand"
              label="Brand Name"
              placeHolder="Please Enter the Brand Name"
            />
              </div>
              <div className="col-md-6 col-sm-12">
              <FormikInput
              name="description"
              label="Description of Product"
              placeHolder="Please Enter a Description of Product"
            />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
              <FormikInput
              name="discount"
              label="Discount Percentage of Product"
              type="number"
              placeHolder="Please Enter a Discount Percentage of Product"
            />
              </div>
              <div className="col-md-6 col-sm-12">
              <FormikInput
              name="price"
              label="Price of Product"
              type="number"
              placeHolder="Please Enter the Price of Product"
              //value={product.price?.toString() || ""}
            />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
              <FormikInput
              name="stock"
              label="Stock"
              type="number"
              placeHolder="Please Enter the Stock of Product"
            />
              </div>
              <div className="col-md-6 col-sm-12">
              <FormikInput
              name="rating"
              label="Rating"
              type="number"
              placeHolder="Please Enter the Rating of Product"
            />
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
        </Formik>

        {submittedProduct && (
          <div className="">
            <h6 className="text-success text-end bold">Successful ...</h6>
            <div className="row mt-4">
              <div className="col-12">
                <div className="card previewCard">
                  <div className="card-header"></div>
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
                          {submittedProduct.discount_percentage}
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
