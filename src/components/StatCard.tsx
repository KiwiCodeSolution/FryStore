'use client'

import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

const StatCard = ({
	icon,
	value,
	label
}: {
	icon: React.ReactNode
	value: number
	label: string
}) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [isVisible, setIsVisible] = useState(false)

	function formatNumber(number: number): string {
		if (number > 999) {
			return new Intl.NumberFormat('uk-UA').format(number)
		}
		return number.toString()
	}

	useEffect(() => {
		const element = ref.current

		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.unobserve(element)
				}
			},
			{ threshold: 0.4 }
		)

		observer.observe(element)

		return () => {
			observer.unobserve(element)
		}
	}, [])

	return (
		<article
			ref={ref}
			className='stat-card w-full max-w-[320px] h-[242px] border border-primary rounded-3xl flex flex-col items-center justify-center p-8 text-center transition-all duration-300 glass-card'
		>
			<div className='w-16 h-16 rounded-full border border-primary flex items-center justify-center bg-background mb-6 shrink-0'>
				{icon}
			</div>

			<p className='text-5xl font-bold text-primary mb-3 font-inter'>
				{isVisible ? (
					<>
						<CountUp start={0} end={value} formattingFn={formatNumber} />+
					</>
				) : (
					'0+'
				)}
			</p>

			<p className='text-lg'>{label}</p>
		</article>
	)
}

export default StatCard
