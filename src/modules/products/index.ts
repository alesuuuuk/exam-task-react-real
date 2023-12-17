// base URL
import { BASE_URL_PRODUCTS } from "@/constants";

export class getProducts{
    baseURL: string = BASE_URL_PRODUCTS;
    constructor() {}
    public async getData(endpoint: string) {
        return await fetch(`${this.baseURL}/${endpoint}`)
        .then((res) => res.json())
        .then((json) =>{
            console.log(json, "GET PRODUCTS")
            return json;
        })
    }
    public async getSingleProduct( id: string) {
        return await fetch(`${this.baseURL}/products/${id}`)
        .then((res) => res.json())
        .then((json) =>{
            console.log(json, "GET SINGLE PRODUCT")
            return json;
        })
    }
}