import ProductList from '../ProductList'
import BaseSection from '../UI/BaseSection'
import SectionWrapper from '../UI/SectionWrapper'
import Title from '../UI/Title'

const Catalogue = () => {
	return (
		<BaseSection id='catalogue' className='relative'>
			<div className='absolute bottom-0 left-0 h-[130px] w-full bg-linear-to-b from-transparent to-black/20 z-1' />

			<SectionWrapper className='py-20 '>
				<Title tag='h2' styles='mb-12'>
					Наша продукція
				</Title>
				<ProductList />
			</SectionWrapper>
		</BaseSection>
	)
}
export default Catalogue
