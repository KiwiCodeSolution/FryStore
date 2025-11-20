import { BoxIcon, CarDelivery, GuardIcon } from '@/assets/icons'

import BaseSection from '../UI/BaseSection'
import SectionWrapper from '../UI/SectionWrapper'
import Title from '../UI/Title'

import Image from 'next/image'

const conditions = [
	{
		name: 'Спецтранспорт',
		text: 'Доставка спеціалізованим транспортом з аерацією',
		icon: <CarDelivery />,
		img: '/images/delivery.avif'
	},
	{
		name: 'Жива риба',
		text: 'Гарантія якості та життєздатності мальків',
		icon: <GuardIcon />,
		img: '/images/fresh_fish.avif'
	},
	{
		name: 'Оптові поставки',
		text: 'Працюємо з оптовими замовниками',
		icon: <BoxIcon />,
		img: '/images/guard.avif'
	}
]

const Delivery = () => {
	return (
		<BaseSection id='delivery' className='relative ' bgColor='bg-black/20'>
			<SectionWrapper className='py-10 md:py-20 xl:py-20 relative z-2'>
				<Title tag='h2' styles='mb-12'>
					Доставка та оплата
				</Title>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8'>
					{conditions.map((item, i) => (
						<div
							key={i}
							className='w-full max-w-[320px] flex flex-col items-center justify-center gap-y-3 border border-primary rounded-3xl overflow-hidden mx-auto'
						>
							<div className='w-full h-48 relative'>
								<Image
									src={item.img}
									alt={item.name}
									width={268}
									height={192}
									className='w-full h-full object-cover'
								/>
								<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border-2 border-primary border-opacity-50 z-3'>
									{item.icon}
								</div>
								<div className='absolute inset-0 bg-linear-to-t from-(--secondary-color) to-transparent z-2' />
							</div>
							<div className='w-full h-[148px] md:h-[200px] lg:h-40 xl:h-[148px] p-6 flex flex-col gap-y-3'>
								<p className='text-2xl font-bold font-inter text-accent text-center'>
									{item.name}
								</p>
								<p className='text-lg text-text-light text-center'>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</SectionWrapper>
		</BaseSection>
	)
}
export default Delivery
