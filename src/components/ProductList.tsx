'use client'

import products from '@/data/products.json'

import ProductCard from './ProductCard'

import { motion } from 'framer-motion'

const ProductList = () => {
	return (
		<motion.div
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8'
			variants={container}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			transition={{ staggerChildren: 0.15 }} // ← ТУТ transition контейнера
		>
			{products.map(product => (
				<motion.div
					key={product.name}
					variants={item}
					transition={{ duration: 0.4 }} // ← ТУТ transition item
				>
					<ProductCard product={product} />
				</motion.div>
			))}
		</motion.div>
	)
}

export default ProductList

// ================== ANIMATION VARIANTS ==================

const container = {
	hidden: {},
	show: {}
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 }
}
