'use client'

import BaseButton from '../UI/BaseButton'
import BaseSection from '../UI/BaseSection'
import SectionWrapper from '../UI/SectionWrapper'
import Title from '../UI/Title'
import ConsultForm from '../forms/ConsultForm'
import OrderForm from '../forms/OrderForm'

import { useState } from 'react'

export type FormType = 'consultation' | 'order'

const Forms = () => {
	const [type, setType] = useState<FormType>('order')

	return (
		<BaseSection id='booking' className='relative'>
			<div className='absolute top-0 left-0 h-[130px] w-full bg-linear-to-b from-black/20 to-transparent z-1' />

			<SectionWrapper className='py-20 '>
				<div className='flex items-center justify-center gap-x-10 mx-auto relative z-2'>
					<BaseButton
						variant={type === 'order' ? 'primary' : 'secondary'}
						action={() => setType('order')}
						as='button'
						className='w-72'
					>
						Я знаю, що хочу
					</BaseButton>{' '}
					<BaseButton
						variant={type === 'consultation' ? 'primary' : 'secondary'}
						action={() => setType('consultation')}
						as='button'
						className='w-72'
					>
						Потрібна консультація
					</BaseButton>
				</div>
				<Title tag='h2' styles='mt-10 mb-4'>
					{type === 'consultation' ? 'Замовити консультацію' : 'Замовити товар'}
				</Title>

				<p className='text-center mb-5'>Заповніть форму і ми зв&apos;яжемося з вами</p>
				<div className='w-[680px] border border-primary rounded-2xl p-8 mx-auto'>
					{type === 'consultation' ? <ConsultForm /> : <OrderForm />}
				</div>
			</SectionWrapper>
		</BaseSection>
	)
}
export default Forms
