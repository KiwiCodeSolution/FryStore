'use client'

import SectionWrapper from '../UI/SectionWrapper'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
	{ label: 'Про нас', href: '#about' },
	{ label: 'Каталог', href: '#catalogue' },
	{ label: 'Доставка', href: '#delivery' },
	{ label: 'Контакти', href: '#contacts' },
	{ label: 'Замовити', href: '#booking' }
]

const Header = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`w-full rounded-b-2xl border-b-2 border-b-accent box-glow sticky top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/60 backdrop-blur-md' : 'bg-background'}`}
		>
			<SectionWrapper className='flex items-center justify-between py-2'>
				<div className='flex items-center gap-x-10'>
					<Image src='/images/logo_transp.png' alt='logo' width={90} height={70} />
					<nav className='flex items-center gap-6'>
						{navLinks.map(({ label, href }) => (
							<Link
								key={label}
								href={href}
								className='text-xl font-semibold text-text-light font-inter hover:text-accent hover:underline hover:underline-offset-2 cursor-pointer transition-all duration-300'
							>
								{label}
							</Link>
						))}
					</nav>
				</div>
				<button>Замовити</button>
			</SectionWrapper>
		</header>
	)
}

export default Header
