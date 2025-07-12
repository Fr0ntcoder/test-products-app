import { notFound } from 'next/navigation'

import { API_URL } from '@/api/api.instance'

import { Product } from '@/components/screens/product'

import { IProduct } from '@/types/product.interface'

// SSR
export default async function ProductPage({
	params
}: {
	params: { id: string }
}) {
	const { id } = await params
	// Сделал через fetch, хотя предпочитаю использовать axios
	try {
		const res = await fetch(`${API_URL.ID(id)}`)
		if (!res.ok) {
			notFound()
		}

		const data: IProduct = await res.json()

		return <Product product={data} />
	} catch (error) {
		notFound()
	}
}
