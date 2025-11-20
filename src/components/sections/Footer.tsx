import { LocationIcon } from '@/assets/icons'

import products from '@/data/products.json'

import Phones from '../Phones'
import SectionWrapper from '../UI/SectionWrapper'

const fishOptions = products.map(p => p.name)

const Footer = () => {
	return (
		<footer
			id='contacts'
			className='w-full mx-auto relative z-0 bg-background rounded-t-2xl border-t-2 border-t-accent box-glow'
		>
			<SectionWrapper className='flex flex-col gap-y-5 py-14'>
				<div className='grid grid-cols-1 ms:grid-cols-2 xl:grid-cols-3 gap-y-14'>
					{/* Ліва колонка */}
					<div className='flex flex-col gap-y-8 mx-auto'>
						<h3 className='text-2xl text-white text-glow font-inter text-center md:text-left'>
							Племінне господарство з постачання якісних мальків
						</h3>
						<div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 gap-y-2 md:gap-y-4 gap-x-2'>
							{fishOptions.map((fish, i) => (
								<p key={i} className='text-lg'>
									{fish}
								</p>
							))}
						</div>
					</div>

					<div className='flex flex-col gap-y-10 md:flex-row xl:col-span-2'>
						{/* Контакти */}
						<div className='flex flex-col gap-y-8 mx-auto'>
							<h3 className='text-2xl text-white text-glow font-inter xl:min-h-16 text-center md:text-left'>
								Наші контакти
							</h3>

							<div className='flex flex-col gap-4 items-center md:items-start'>
								<Phones section='footer' />
								{/* Адреса */}
								<address className='flex items-center group gap-x-2 min-h-7 not-italic'>
									<LocationIcon className='stroke-white group-hover:stroke-accent transition-all duration-300' />
									<a
										href='https://maps.app.goo.gl/QE7xAe1o7puakwTR6'
										className='text-text-light font-inter hover:text-accent hover:underline hover:underline-offset-2 cursor-pointer transition-all duration-300'
									>
										Краснокутськ, Харківська область
									</a>
								</address>
							</div>
						</div>

						{/* Графік роботи */}
						<div className='flex flex-col gap-y-8 mx-auto'>
							<h3 className='text-2xl text-white text-glow font-inter xl:min-h-16 text-center md:text-left'>
								Графік роботи
							</h3>
							<div className='flex flex-col gap-4'>
								<p className='text-lg text-center md:text-left'>
									Пн-Пт: 8:00 - 18:00
								</p>
								<p className='text-lg text-center md:text-left'>
									Сб-Нд: За домовленістю
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Лінія */}
				<div
					className='w-full h-px rounded-full my-10'
					style={{
						background:
							'linear-gradient(90deg, var(--secondary-color) 0%, var(--accent-color) 30%, var(--secondary-color) 100%)'
					}}
				/>

				<p className='text-center text-accent text-base'>
					© 2025 Рибне Господарство. Всі права захищені.
				</p>
			</SectionWrapper>
		</footer>
	)
}

export default Footer
