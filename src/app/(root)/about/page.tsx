import { About } from '@/components/screens/about/About'

export const dynamic = 'force-static'

// SSG
export default async function AboutPage() {
	return <About />
}
