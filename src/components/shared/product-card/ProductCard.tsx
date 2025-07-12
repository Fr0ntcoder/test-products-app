import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/config/routes.config'

import { formatPrice } from '@/utils/formatPrice'

import { IProduct } from '@/types/product.interface'

interface Props {
	product: IProduct
}

export function ProductCard({ product }: Props) {
	return (
		<div className='flex flex-col border rounded  shadow hover:shadow-lg transition cursor-pointer'>
			<div className=' relative w-full h-50 sm:h-60 md:h-72'>
				<Image
					src={product.images[0]}
					fill
					sizes='100%'
					className='object-cover object-left'
					alt={product.title}
					priority
				/>
			</div>
			<div className='flex flex-col p-4'>
				<Link
					href={ROUTES.PRODUCT(product.id)}
					className='block flex-1 text-base mb-5 p-0 font-semibold  hover:underline sm:text-lg sm:min-h-14 md:text-xl md:min-h-20'
				>
					{product.title}
				</Link>
				<div className='w-full flex justify-between items-center text-base mt-auto sm:text-lg md:text-xl'>
					Цена:
					<span className='font-semibold'>{formatPrice(product.price)}</span>
				</div>
			</div>
		</div>
	)
}
