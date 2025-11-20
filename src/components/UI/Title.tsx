import React from 'react'

interface TitleProps {
	tag?: 'h1' | 'h2' | 'h3'
	styles?: string
	children: React.ReactNode
}

const Title = ({ tag = 'h3', styles = '', children }: TitleProps) => {
	const baseStyles =
		'leading-[1.2] xl:leading-[48px] font-bold text-glow text-center font-inter ' + styles

	switch (tag) {
		case 'h1':
			return <h1 className={`text-5xl ${baseStyles}`}>{children}</h1>
		case 'h2':
			return <h2 className={`text-4xl ${baseStyles}`}>{children}</h2>
		case 'h3':
		default:
			return <h3 className={`text-3xl ${baseStyles}`}>{children}</h3>
	}
}

export default Title
