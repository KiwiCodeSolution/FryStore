import About from '@/components/sections/About'
import Catalogue from '@/components/sections/Catalogue'
import Delivery from '@/components/sections/Delivery'
import Forms from '@/components/sections/Forms'
import Hero from '@/components/sections/Hero'

export default function Home() {
	return (
		<main className='w-full z-0 relative'>
			<Hero />
			<About />
			<Catalogue />
			<Delivery />
			<Forms />
		</main>
	)
}
