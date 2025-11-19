'use client'

import { sendToTelegram } from '@/utils/sendToTelegram'

import BaseButton from '../UI/BaseButton'

import { useForm } from 'react-hook-form'

type ConsultFormValues = {
	name: string
	phone: string
	message: string
}

const ConsultForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ConsultFormValues>()

	const onSubmit = async (data: ConsultFormValues) => {
		const text = `
<b>📩 ЗАПИТ НА КОНСУЛЬТАЦІЮ</b>

<b>Імʼя:</b> ${data.name}
<b>Телефон:</b> ${data.phone}
<b>Питання:</b> ${data.message}
		`

		await sendToTelegram(text)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			{/* Імʼя */}
			<div className='relative min-h-[70px]'>
				<input
					{...register('name', { required: true })}
					placeholder="Ваше ім'я"
					className='form-input'
				/>
				{errors.name && (
					<p className='form-error absolute left-1 bottom-0 '>Поле обов&apos;язкове</p>
				)}
			</div>

			{/* Телефон */}
			<div className='relative min-h-[70px]'>
				<input
					{...register('phone', { required: true })}
					placeholder='Телефон'
					className='form-input'
				/>
				{errors.phone && (
					<p className='form-error absolute left-1 bottom-0 '>Поле обов&apos;язкове</p>
				)}
			</div>

			{/* Повідомлення */}
			<div className='relative min-h-[120px]'>
				<textarea
					{...register('message')}
					placeholder='Ваше питання'
					className='form-input h-32 resize-none'
				/>
			</div>

			<p className='text-text-light italic text-sm'>
				Натискаючи на кнопку, ви даєте згоду на обробку персональних даних
			</p>

			<BaseButton
				btnType='submit'
				variant='primary'
				className='w-full rounded-full py-4 text-lg'
				as='button'
			>
				Отримати консультацію
			</BaseButton>
		</form>
	)
}

export default ConsultForm
