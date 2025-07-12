import { Container } from '@/components/ui/container'

export function Loader() {
	return (
		<Container className='flex justify-center items-center h-full'>
			<div className='animate-spin rounded-full h-15 w-15 sm:h-20 sm:w-20 md:h-25 md:w-25 lg:h-32 lg:w-32 border-t-2 border-b-2 border-blue-500'></div>
		</Container>
	)
}
