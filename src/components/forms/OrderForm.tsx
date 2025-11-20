'use client'

import { sendToTelegram } from '@/utils/sendToTelegram'

import products from '@/data/products.json'

import BaseButton from '../UI/BaseButton'

import { useForm } from 'react-hook-form'

const fishOptions = products.map(p => p.name)

type OrderFormValues = {
	name: string
	phone: string
	fish: string
	amount: string
	address: string
}

const OrderForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<OrderFormValues>()

	const onSubmit = async (data: OrderFormValues) => {
		const text = `
<b>📝 НОВЕ ЗАМОВЛЕННЯ</b>

<b>Імʼя:</b> ${data.name}
<b>Телефон:</b> ${data.phone}

<b>Риба:</b> ${data.fish}
<b>Кількість (кг):</b> ${data.amount}
<b>Адреса:</b> ${data.address}
		`
		await sendToTelegram(text)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			{/* ІМʼЯ */}
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

			{/* ТЕЛЕФОН */}
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

			{/* ВИД РИБИ */}
			<div className='relative min-h-[70px]'>
				<select {...register('fish', { required: true })} className='form-input'>
					<option value=''>Виберіть вид риби</option>
					{fishOptions.map(f => (
						<option key={f} value={f}>
							{f}
						</option>
					))}
				</select>
				{errors.fish && (
					<p className='form-error absolute left-1 bottom-0 '>Оберіть вид риби</p>
				)}
			</div>

			{/* КІЛЬКІСТЬ */}
			<div className='relative min-h-[70px]'>
				<input
					{...register('amount', { required: true })}
					placeholder='Кількість (кг)'
					className='form-input'
				/>
				{errors.amount && (
					<p className='form-error absolute left-1 bottom-0 '>Вкажіть кількість</p>
				)}
			</div>

			{/* АДРЕСА */}
			<div className='relative min-h-[70px]'>
				<input
					{...register('address', { required: true })}
					placeholder='Адреса доставки'
					className='form-input'
				/>
				{errors.address && (
					<p className='form-error absolute left-1 bottom-0 '>Вкажіть адресу доставки</p>
				)}
			</div>

			<p className='text-text-light italic text-sm'>
				Натискаючи на кнопку, ви даєте згоду на обробку персональних даних
			</p>

			<BaseButton
				btnType='submit'
				variant='primary'
				className='w-full rounded-full py-2 xl:py-4 text-lg'
				as='button'
			>
				Відправити замовлення
			</BaseButton>
		</form>
	)
}

export default OrderForm
