import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UpdateProductModel } from "../../../models/requests/UpdateProduct";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<UpdateProductModel>({
    title: "",
    description: "",
  });

  const [updatedProduct, setUpdatedProduct] =
    useState<UpdateProductModel | null>(null);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUpdatedProduct({ ...product });
  };
  return (
    <div className="container">
      <div className="main productContainer">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mt-2 mb-5">Update Product</h2>
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  value={product.category || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      category: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  value={product.brand || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      brand: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={product.title || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      title: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={product.description || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      description: e.target.value,
                    }))
                  }
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
                  value={product.discountPercentage?.toString() || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      discountPercentage: parseFloat(e.target.value) || 0,
                    }))
                  }
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  value={product.price?.toString() || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      price: parseFloat(e.target.value) || 0,
                    }))
                  }
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="text"
                  value={product.stock?.toString() || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      stock: parseFloat(e.target.value) || 0,
                    }))
                  }
                />
              </Form.Group>
            </div>
            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  value={product.rating?.toString() || ""}
                  onChange={(e) =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      rating: parseFloat(e.target.value) || 0,
                    }))
                  }
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

        {updatedProduct && (
          <div className="row mt-4">
            <div className="col-12">
              <div className="card previewCard">
                <div className="card-header">
                  <img src={product.thumbnail} alt="product-thumbnail" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{updatedProduct.title}</h5>
                  <p className="card-text">{updatedProduct.description}</p>
                  <div className="row">
                    <div className="col-6">
                      <p className="card-text">
                        <strong>Brand:</strong> {updatedProduct.brand}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="card-text">
                        <strong>Category:</strong> {updatedProduct.category}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="card-text">
                        <strong>Stock:</strong> {updatedProduct.stock}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="card-text">
                        <strong>Discount Percentage:</strong>{" "}
                        {updatedProduct.discountPercentage}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="card-text">
                        <strong>Price:</strong> {updatedProduct.price}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="card-text">
                        <strong>Rating:</strong> {updatedProduct.rating}
                      </p>
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

export default UpdateProduct;
