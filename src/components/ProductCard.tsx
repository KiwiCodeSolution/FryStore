import Image from 'next/image'

export type Product = {
	name: string
	description?: string
	img: string
}
type ProductCardProps = {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<article className='glass-card stat-card w-full h-[342px] border border-primary rounded-3xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300'>
			<div className='w-full h-48 relative '>
				<Image
					src={product.img || '/images/products/prod_1.avif'}
					alt={product.name}
					width={268}
					height={192}
					className='relative z-1 w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-linear-to-t from-(--secondary-color) to-transparent z-2' />
			</div>
			<div className='w-full h-[148px] p-6 flex flex-col gap-y-3'>
				<p className='text-2xl font-bold font-inter text-accent'>{product.name}</p>
				{product.description && (
					<p className='text-lg text-text-light'>{product.description}</p>
				)}
			</div>
		</article>
	)
}
export default ProductCard
