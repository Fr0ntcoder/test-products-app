'use client'

import { useEffect, useState } from 'react'

import { API_URL } from '@/api/api.instance'

import { ProductCard } from '@/components/shared/product-card'
import { Container } from '@/components/ui/container'
import { Loader } from '@/components/ui/loader'

import { IProduct } from '@/types/product.interface'

export function Home() {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		// Сделал через fetch, хотя предпочитаю использовать axios
		const fetchProducts = async () => {
			try {
				const res = await fetch(`${API_URL.PRODUCTS}?offset=1&limit=20`)
				if (!res.ok) throw new Error('Ошибка загрузки продуктов')
				const data = await res.json()
				setProducts(data)
			} catch (error) {
				setError((error as Error).message)
			} finally {
				setLoading(false)
			}
		}
		fetchProducts()
	}, [])

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <div>{error}</div>
	}
	const productList = products.map(product => (
		<ProductCard product={product} key={product.id} />
	))

	return (
		<Container>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
				{productList}
			</div>
		</Container>
	)
}
