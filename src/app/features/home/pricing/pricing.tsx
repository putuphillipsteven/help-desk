import { pricings } from '@/app/lib/data/pricing';
import SectionButton from '../components/section-button';
import PricingCard from './components/pricing-card';

export default function Pricing() {
	const renderedPricingCard = pricings?.map((pricing, index) => {
		return <PricingCard key={index} {...pricing} />;
	});
	return (
		<div className='home-section centering-flex-col gap-y-8 py-8 bg-light-gray-dimata1 relative'>
			<SectionButton colour='gray' text='Pricing' />
			<h2 className='section-main-text'>Build Stronger With Dimata Help Desk</h2>
			<div className='flex items-start justify-between w-[90%] z-20'>{renderedPricingCard}</div>
			<img src='pricing/arrow.svg' className='w-100 absolute inset-y-0 left-[160px] top-[140px]' />
		</div>
	);
}
