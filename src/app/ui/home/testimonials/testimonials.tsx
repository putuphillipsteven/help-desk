import { FaArrowRight } from 'react-icons/fa6';
import { testimonials } from '@/app/lib/data/testimonials';
import SectionButton from '../components/section-button';
import Testimony from './component/testimony';
import TestimonyNavigation from './component/testimony-navigation';

export default function Testimonials() {
	const renderedTestimonials = testimonials?.map((testimony, index) => {
		return (
			<Testimony
				avatar={testimony.avatar}
				company={testimony.company}
				logo={testimony.logo}
				position={testimony.position}
				testimony={testimony.testimony}
				userName={testimony.userName}
				id={testimony.id}
			/>
		);
	});
	return (
		<div className='home-section py-16 flex flex-col gap-y-8'>
			<div className='flex flex-col gap-y-4 -mr-[240px]'>
				<div className='centering-flex justify-between mr-[240px]'>
					<div className='w-full flex flex-col gap-y-2'>
						<SectionButton colour='orange' text='Testimonials' />
						<h2 className='section-main-text'>
							About Customer <span className='font-bold'>Stories</span>
						</h2>
					</div>
					<TestimonyNavigation />
				</div>
				<div className='carousel carousel-center w-full p-0 space-x-4 -mr-[240px]'>
					{renderedTestimonials}
				</div>
			</div>
		</div>
	);
}
