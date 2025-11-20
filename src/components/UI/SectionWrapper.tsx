const SectionWrapper = ({
	children,
	className = ''
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div className={`w-full max-w-7xl px-4 md:px-8 xl:px-12 mx-auto ${className}`}>
			{children}
		</div>
	)
}
export default SectionWrapper
