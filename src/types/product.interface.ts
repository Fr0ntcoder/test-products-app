import { ICategory } from '@/types/category.interface'

export interface IProduct {
	id: string
	title: string
	slug: string
	price: number
	description: string
	category: ICategory
	images: string[]
}
