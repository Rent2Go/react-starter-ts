import axios from "axios";
import { GetAllProductsModel } from "../models/responses/GetAllProducts";
import { ProductModel } from "../models/responses/ProductModel";

class ProductService{
    getAll(){
        return axios.get<ProductModel[]>("http://localhost:8080/api/v1/products")
    }

    getById(id:Number){
        return axios.get<ProductModel>(`http://localhost:8080/api/v1/products/${id}`);
    }
}

export default ProductService;