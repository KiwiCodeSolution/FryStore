'use client'

import { navLinks } from '@/data/navLinks'

import Phones from '../Phones'
import SectionWrapper from '../UI/SectionWrapper'
import BaseModal from '../UI/modal/BaseModal'
import MobileMenuContent from '../UI/modal/MobileMenuModal'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<header
				className={`w-full rounded-b-2xl border-b-2 border-b-accent box-glow sticky top-0 left-0 z-50 transition-all duration-300 ${
					scrolled ? 'bg-background/60 backdrop-blur-md' : 'bg-background'
				}`}
			>
				<SectionWrapper className='flex items-center justify-between py-2'>
					<div className='flex items-center gap-x-6'>
						<Image src='/images/logo_transp.png' alt='logo' width={90} height={70} />

						{/* Desktop menu */}
						<nav className='hidden md:flex items-center gap-6'>
							{navLinks.map(({ label, href }) => (
								<Link
									key={href}
									href={href}
									className='text-xl font-semibold text-text-light font-inter hover:text-accent transition-all duration-300'
								>
									{label}
								</Link>
							))}
						</nav>
					</div>

					<div className='hidden items-center gap-x-5 lg:flex xl:hidden'>
						<Phones section='headerLg' />
					</div>

					<div className='hidden items-center gap-x-5 xl:flex'>
						<Phones section='header' />
					</div>

					{/* Burger */}
					<button className='md:hidden p-2' onClick={() => setMenuOpen(true)}>
						<span className='block w-6 h-0.5 bg-white mb-1' />
						<span className='block w-6 h-0.5 bg-white mb-1' />
						<span className='block w-6 h-0.5 bg-white' />
					</button>
				</SectionWrapper>
			</header>

			{/* Mobile menu modal */}
			<BaseModal
				isOpen={menuOpen}
				onClose={() => setMenuOpen(false)}
				className='p-0 border-0 bg-transparent'
			>
				<MobileMenuContent onClose={() => setMenuOpen(false)} />
			</BaseModal>
		</>
	)
}
