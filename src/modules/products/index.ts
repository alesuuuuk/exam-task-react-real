// base URL
import { BASE_URL_PRODUCTS } from "@/constants";

export class getProducts{
    baseURL: string = BASE_URL_PRODUCTS;
    constructor() {}
    public async getData(endpoint: string) {
        return await fetch(`${this.baseURL}/${endpoint}`)
        .then((res) => res.json())
        .then((json) =>{
            return json;
        })
    }
    public async getSingleProduct( id: number) {
        return await fetch(`${this.baseURL}/products/${id}`)
        .then((res) => res.json())
        .then((json) =>{
            return json;
        })
    }
}