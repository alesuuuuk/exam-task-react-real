// BASE_URL 
import { BASE_URL_COMMENTS } from "@/constants";

export class getComments{
    constructor(){}
    baseURL:string = BASE_URL_COMMENTS;
    public async getData(endpoint: string){
        return await fetch(`${this.baseURL}/${endpoint}`)
        .then((res) => res.json())
        .then((json) =>{
            return json;
        })
    }
}