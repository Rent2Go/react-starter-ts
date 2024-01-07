import axios from "axios";
import { GetAllProductsModel } from "../models/responses/GetAllProducts";

class ProductService{
    getAll(){
        return axios.get<GetAllProductsModel>("https://dummyjson.com/products")
    }
}

export default ProductService;