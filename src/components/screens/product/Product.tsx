import { Container } from '@/components/ui/container'

import { formatPrice } from '@/utils/formatPrice'

import { ProductGallery } from './product-gallery'
import { IProduct } from '@/types/product.interface'

interface Props {
	product: IProduct
	className?: string
}

export function Product({ product }: Props) {
	return (
		<Container>
			<div className='w-full flex flex-col sm:grid sm:grid-cols-2 sm:gap-5  md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr]'>
				<ProductGallery images={product.images} />
				<div className='flex flex-col mt-5 sm:mt-0'>
					<h2 className='text-xl font-semibold mb-2 sm:text-2xl'>
						{product.title}
					</h2>
					<p className='text-base mb-2 sm:text-lg'>{product.description}</p>
					<div className='text-base sm:text-lg mb-2'>
						Категория:
						<span className='font-semibold ml-2'>{product.category.name}</span>
					</div>
					<div className='text-base sm:text-lg mb-2'>
						Цена:
						<span className='font-semibold ml-2'>
							{formatPrice(product.price)}
						</span>
					</div>
				</div>
			</div>
		</Container>
	)
}
