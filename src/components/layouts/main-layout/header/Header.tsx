'use-client'

import { Cat } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

import { ROUTES } from '@/config/routes.config'

export function Header() {
	return (
		<header className='py-5'>
			<Container className='flex justify-between items-center'>
				<Link href={ROUTES.HOME}>
					<Cat className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10' />
				</Link>
				<nav className='ml-auto mr-5'>
					<Link
						href={ROUTES.ABOUT}
						className='text-xl sm:text-2xl transition-all duration-[0.2s] ease-[ease-in] border-b-2 border-solid border-transparent hover:border-black'
					>
						О нас
					</Link>
				</nav>
				<ThemeSwitcher />
			</Container>
		</header>
	)
}
