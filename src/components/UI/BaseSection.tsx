type BaseSectionProps = {
	children: React.ReactNode
	className?: string
	bgColor?: string
	id?: string
}

const BaseSection = ({ children, className, bgColor, id }: BaseSectionProps) => {
	const bgStyle = bgColor || 'bg-background'

	return (
		<section
			className={`w-full flex flex-col mx-auto relative z-0 ${className} ${bgStyle}`}
			id={id}
		>
			{children}
		</section>
	)
}
export default BaseSection
