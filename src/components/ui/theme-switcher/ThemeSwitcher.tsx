'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	if (resolvedTheme === 'dark') {
		return (
			<Sun
				className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white cursor-pointer '
				onClick={() => setTheme('light')}
			/>
		)
	}

	if (resolvedTheme === 'light') {
		return (
			<Moon
				className='text-black cursor-pointer w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10md:h-12'
				onClick={() => setTheme('dark')}
			/>
		)
	}
}
