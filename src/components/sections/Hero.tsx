import BaseButton from '../UI/BaseButton'
import BaseSection from '../UI/BaseSection'
import SectionWrapper from '../UI/SectionWrapper'
import Title from '../UI/Title'

const Hero = () => {
	return (
		<BaseSection className='h-[750px] py-10 hero relative mt-[-15px]'>
			<div className='wave-gradient absolute top-0 left-0 w-full h-full z-1 opacity-40' />
			<SectionWrapper className='h-full z-2 flex flex-col gap-y-10 items-center justify-center'>
				<Title tag='h1' styles='mb-6 text-primary-color'>
					Племінне господарство
				</Title>
				<Title tag='h2' styles='text-accent'>
					Мальки та товарна риба
				</Title>
				<BaseButton
					variant='primary'
					as='link'
					href='#booking'
					className='w-[300px] btn-pulse'
				>
					Замовити
				</BaseButton>
			</SectionWrapper>

			<div className='absolute bottom-0 left-0 h-[50px] w-full between-sections-gradient z-1' />
		</BaseSection>
	)
}
export default Hero
