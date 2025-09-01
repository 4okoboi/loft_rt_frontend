import axios from 'axios'
import { ProductType } from '../utils/generalTypes'

const instance = axios.create({
	baseURL: 'https://loft-rt.ru/api',
})

export const CatalogAPI = {
	async getAllProducts(
		counter: string,
		material: string,
		type: string,
		price_range: string,
		sort: string,
		search_query: string
	) {
		console.log('API call params:', {
			counter,
			material,
			type,
			price_range,
			sort,
			search_query,
		})
		const response = await instance.get<Array<ProductType>>(`items_list/`, {
			params: { counter, material, type, price_range, sort, search_query },
		})
		console.log('API response structure:', response.data)
		console.log('First product example:', response.data[0])
		return response
	},
}

export const ItemAPI = {
	async getItemById(itemId: string) {
		console.log('Getting item by ID:', itemId)
		const response = await instance.get<ProductType>(`item_self/`, {
			params: { itemId },
		})
		console.log('Item API response:', response.data)
		return response
	},
}

export const AuditAPI = {
	async getPostAudit(
		name: string,
		number: string,
		comment: string,
		items: string
	) {
		console.log(name, number, comment, items, 'api')
		return await instance
			.post(`order_make/`, { params: { name, number, comment, items } })
			.then(response => response)
	},
}
