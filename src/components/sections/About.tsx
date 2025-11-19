import { CalendarDays, FishIcon, Users } from '@/assets/icons'

import StatCard from '../StatCard'
import BaseSection from '../UI/BaseSection'
import SectionWrapper from '../UI/SectionWrapper'
import Title from '../UI/Title'

const stats = [
	{ icon: <CalendarDays />, value: 30, label: 'років досвіду' },
	{ icon: <Users />, value: 1000, label: 'клієнтів' },
	{ icon: <FishIcon />, value: 10, label: 'видів риб' }
]

const About = () => {
	return (
		<BaseSection id='about' className='relative about'>
			<div className='absolute top-0 left-0 h-20 w-full between-sections-gradient z-1 rotate-180' />
			<div className='wave-gradient absolute top-0 left-0 w-full h-full z-1 opacity-95' />

			<SectionWrapper className='py-20 relative z-2'>
				<Title tag='h2' styles='mb-12'>
					Про нас
				</Title>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{stats.map((item, i) => (
						<StatCard key={i} icon={item.icon} value={item.value} label={item.label} />
					))}
				</div>
			</SectionWrapper>

			<div className='absolute bottom-0 left-0 h-20 w-full between-sections-gradient z-1' />
		</BaseSection>
	)
}

export default About

// =====================
//     COMPONENT
// =====================
