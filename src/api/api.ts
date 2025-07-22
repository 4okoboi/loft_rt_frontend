import axios from "axios";
import {
    ProductType
} from "../utils/generalTypes";

const instance = axios.create({
    baseURL: "http://79.174.86.248:8080",
})

export const CatalogAPI = {
    async getAllProducts(counter: string, material: string, type: string, price_range: string, sort: string, search_query: string){
        console.log(counter, material, type, price_range, sort, search_query)
        return await instance.get<Array<ProductType>>(
            `items_list/`, {params: {counter, material, type, price_range, sort, search_query}}
        ).then(response => response)
    },
}

// export const ItemAPI = {
//     async getItemById(itemId: string){
//         // console.log(itemId)
//         return await instance.get<ProductType>(
//             `item_self/`, {params: {itemId}}
//         ).then(response => response)
//     },
// }

export const AuditAPI = {
    async getPostAudit(name: string, number: string, comment: string, items: string){
        console.log(name, number, comment, items, "api")
        return await instance.post(
            `order_make/`, {params: {name, number, comment, items}}
        ).then(response => response)
    },
}