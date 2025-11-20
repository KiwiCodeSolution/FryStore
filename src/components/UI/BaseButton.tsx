'use client'

import Link from 'next/link'
import React from 'react'

// якщо ти використовуєш свій кастомний Link — заміни тут

type BtnVariant = 'primary' | 'secondary' | 'gradient'
type BtnType = 'button' | 'submit' | 'reset'

interface BaseBtnCore {
	variant?: BtnVariant
	children: React.ReactNode
	className?: string
}

interface ButtonProps extends BaseBtnCore {
	as?: 'button'
	action?: () => void
	btnType?: BtnType
	href?: never
}

interface LinkProps extends BaseBtnCore {
	as: 'link'
	href: string
	action?: never
	btnType?: never
}

type BaseBtnProps = ButtonProps | LinkProps

const BaseButton: React.FC<BaseBtnProps> = props => {
	const { variant = 'secondary', children, className = '' } = props

	const baseStyle =
		'block border-box cursor-pointer flex justify-center items-center transition-all duration-300 font-bold md:min-h-[48px] px-6 py-2 rounded-3xl hover:scale-105'

	const variants: Record<BtnVariant, string> = {
		primary: 'bg-primary text-text-light border border-primary',
		secondary: 'bg-transparent border border-primary text-primary',
		gradient: 'btn-gradient text-text-light border border-transparent'
	}

	const combined = `${baseStyle} ${variants[variant]} ${className}`.trim()

	// Якщо це LINK
	if (props.as === 'link') {
		return (
			<Link href={props.href} className={combined}>
				{children}
			</Link>
		)
	}

	// Якщо це BUTTON
	return (
		<button className={combined} onClick={props.action} type={props.btnType || 'button'}>
			{children}
		</button>
	)
}

export default BaseButton
