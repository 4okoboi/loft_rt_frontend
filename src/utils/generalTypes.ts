// Общие типы для проекта

export interface ItemType {
	id: number
	name: string
	price: number
	description?: string
	image?: string
	category?: string
}

export interface CatalogItem {
	id: number
	name: string
	price: number
	description: string
	image: string
	category: string
}

export interface BasketItem extends ItemType {
	quantity: number
}

export interface UserType {
	id: number
	name: string
	email?: string
}

export interface AuditMessage {
	id: number
	name: string
	phone: string
	comment: string
	date: string
}

export interface ApiResponse<T> {
	data: T
	status: number
	message?: string
}

export interface ProductType {
	id: number
	name: string
	price: number
	description: string
	image: string
	category: string
	quantity?: number
}

export interface UserProfileType {
	id: number
	name: string
	email: string
	avatar?: string
	bio?: string
}

export interface MessageType {
	id: number
	message: string
	userId: number
	timestamp: string
}

export interface AuditType {
	addMessage: (name: string, number: string, comment: string) => void
}

export interface FooterProps {
	isAuth: boolean
	friends: any[]
	authorizedUserId: number
	isShowPreloader: boolean
	users: any[]
}
