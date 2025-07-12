import { Container } from '@/components/ui/container'

export function About() {
	const generatedDate = new Date().toLocaleString('ru-RU')

	return (
		<Container>
			<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1'>
				О нас
			</h2>
			<p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-2'>
				Это тестовое приложение для демонстрации работы с Next.js
			</p>
			<p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
				Сгенерировано: {generatedDate}
			</p>
		</Container>
	)
}
