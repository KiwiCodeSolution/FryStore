'use client'

import Phones from '@/components/Phones'

import { navLinks } from '@/data/navLinks'

import Link from 'next/link'

// ← ТЕ САМЕ ДЖЕРЕЛО

export default function MobileMenuContent({ onClose }: { onClose: () => void }) {
	return (
		<div className='w-[70vw] max-w-[320px] h-full bg-background border-l border-accent box-glow p-6 flex flex-col gap-6 animate-slide-in-right'>
			<button className='text-text-light text-3xl self-end' onClick={onClose}>
				×
			</button>

			<nav className='flex flex-col gap-5 mt-4'>
				{navLinks.map(({ label, href }) => (
					<Link
						key={href}
						href={href}
						onClick={onClose}
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
	)
}
