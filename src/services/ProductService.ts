import axios from "axios";
import { GetAllProductsModel } from "../models/responses/GetAllProducts";
import { ProductModel } from "../models/responses/ProductModel";
import axiosInstance from "../utils/axiosInterceptors";

class ProductService{
    getAll(){
        //return axiosInstance.get<ProductModel[]>("products/")
        return axiosInstance.get<GetAllProductsModel>("products/")
    }

    getById(id:Number){
        return axiosInstance.get<ProductModel>(`products/${id}`);
    }
}

export default ProductService;