import { contactPhones } from '@/config/contacts'

import { Phone } from '@/assets/icons'

import { formatPhone } from '@/utils/formatPhone'

type sectionType = 'headerLg' | 'footer' | 'mobileMenu' | 'header'
type PhonesComponentProps = {
	section: sectionType
}

const Phones = ({ section = 'footer' }: PhonesComponentProps) => {
	const renderPhones = section === 'headerLg' ? contactPhones.slice(0, 1) : contactPhones

	return (
		<>
			{renderPhones.map(phone => (
				<div key={phone} className='flex items-center group gap-x-2 min-h-7'>
					<Phone className='stroke-white group-hover:stroke-accent transition-all duration-300' />
					<a
						href={`tel:${phone}`}
						className='text-text-light font-inter hover:text-accent hover:underline hover:underline-offset-2 cursor-pointer transition-all duration-300'
					>
						{formatPhone(phone)}
					</a>
				</div>
			))}
		</>
	)
}
export default Phones
