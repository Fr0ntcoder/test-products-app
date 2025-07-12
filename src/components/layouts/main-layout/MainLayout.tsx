import { PropsWithChildren } from 'react'

import { Header } from './header'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex h-full flex-col'>
			<Header />
			<main className='flex-1 pb-5 sm:mt-7 md:mt-8'>{children}</main>
		</div>
	)
}
