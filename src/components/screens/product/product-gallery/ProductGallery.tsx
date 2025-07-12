'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
	images: string[]
}

export function ProductGallery({ images }: Props) {
	const [activeImage, setActiveImage] = useState(images[0])

	const thumbList = images.map((image, i) => (
		<button
			key={i}
			className={`relative h-20 cursor-pointer border-1 ${activeImage === image ? 'border-primary' : 'border-transparent'}`}
			onClick={() => setActiveImage(image)}
		>
			<Image
				src={image}
				fill
				sizes='100%'
				className='object-cover object-left'
				priority
				alt='фото'
			/>
		</button>
	))

	return (
		<div>
			<div className='relative w-full h-64 mb-2 sm:h-72 md:h-100'>
				<Image
					src={activeImage}
					fill
					sizes='100%'
					priority
					className='object-cover object-left'
					alt='фото'
				/>
			</div>
			<div className='grid grid-cols-4 gap-2 overflow-x-auto'>{thumbList}</div>
		</div>
	)
}
