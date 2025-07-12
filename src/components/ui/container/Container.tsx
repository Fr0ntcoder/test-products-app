import cn from 'clsx'
import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
	className?: string
}

export function Container({ children, className }: Props) {
	return (
		<div className={cn(className, 'max-w-7xl w-full mx-auto px-4 sm:px-5')}>
			{children}
		</div>
	)
}
