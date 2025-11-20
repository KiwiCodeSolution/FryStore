'use client'

import Phones from '../Phones'
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
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`w-full rounded-b-2xl border-b-2 border-b-accent box-glow sticky top-0 left-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-background/60 backdrop-blur-md' : 'bg-background'
			}`}
		>
			<SectionWrapper className='flex items-center justify-between py-2'>
				<div className='flex items-center gap-x-6'>
					<Image src='/images/logo_transp.png' alt='logo' width={90} height={70} />

					{/* Десктопна навігація */}
					<nav className='hidden md:flex items-center gap-6'>
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

				{/* Десктоп: телефони */}
				<div className='hidden items-center gap-x-5 lg:flex xl:hidden'>
					<Phones section='headerLg' />
				</div>
				<div className='hidden items-center gap-x-5 xl:flex'>
					<Phones section='header' />
				</div>

				{/* Мобільний бургер */}
				<button
					className='md:hidden flex flex-col gap-1.5 p-2'
					onClick={() => setMenuOpen(true)}
				>
					<span className='w-6 h-0.5 bg-text-light'></span>
					<span className='w-6 h-0.5 bg-text-light'></span>
					<span className='w-6 h-0.5 bg-text-light'></span>
				</button>
			</SectionWrapper>

			{/* Мобільне меню — модалка */}
			{menuOpen && (
				<div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex justify-end'>
					<div className='w-3/4 max-w-[280px] bg-background h-full p-6 flex flex-col gap-6'>
						<button
							className='text-text-light text-xl self-end'
							onClick={() => setMenuOpen(false)}
						>
							✕
						</button>

						<nav className='flex flex-col gap-5 mt-4'>
							{navLinks.map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									onClick={() => setMenuOpen(false)}
									className='text-xl text-text-light font-inter hover:text-accent transition-all duration-300'
								>
									{label}
								</Link>
							))}
						</nav>

						<div className='mt-auto'>
							<Phones section='mobileMenu' />
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
