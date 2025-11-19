import React from 'react'

interface TitleProps {
	tag?: 'h1' | 'h2' | 'h3'
	styles?: string
	children: React.ReactNode
}

const Title = ({ tag = 'h3', styles = '', children }: TitleProps) => {
	const baseStyles =
		'leading-1 font-bold xl:leading-[48px] text-glow text-center font-inter ' + styles

	switch (tag) {
		case 'h1':
			return <h1 className={`text-3xl xl:text-5xl ${baseStyles}`}>{children}</h1>
		case 'h2':
			return <h2 className={`text-2xl xl:text-[36px] ${baseStyles}`}>{children}</h2>
		case 'h3':
		default:
			return <h3 className={`text-xl xl:text-[22px] ${baseStyles}`}>{children}</h3>
	}
}

export default Title
