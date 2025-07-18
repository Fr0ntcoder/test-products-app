import cn from 'clsx'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({
	subsets: ['cyrillic'],
	weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={cn(roboto.className)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
