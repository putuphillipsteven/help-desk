'use client';

import Carousel from 'react-multi-carousel';
import { useState } from 'react';
import { testimonials } from '@/app/lib/data/testimonials';
import SectionButton from '../components/section-button';
import Testimony from './component/testimony';
import TestimonyNavigation from './component/testimony-navigation';

export default function Testimonials() {
	const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState<number>(0);

	const handleNext = () => {
		setCurrentTestimonyIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const handlePrevious = () => {
		setCurrentTestimonyIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length,
		);
	};

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	const renderedTestimonials = testimonials.map((testimony, index) => (
		<Testimony
			key={testimony.id}
			avatar={testimony.avatar}
			company={testimony.company}
			logo={testimony.logo}
			position={testimony.position}
			testimony={testimony.testimony}
			userName={testimony.userName}
			id={testimony.id}
			isActive={index === currentTestimonyIndex}
		/>
	));

	return (
		<div className='home-section py-16 flex flex-col gap-y-8'>
			<div className='flex flex-col gap-y-16  -mr-[240px]'>
				<div className='centering-flex justify-between mr-[240px]'>
					<div className='w-full flex flex-col gap-y-2'>
						<SectionButton colour='orange' text='Testimonials' />
						<h2 className='section-main-text'>
							About Customer <span className='font-bold'>Stories</span>
						</h2>
					</div>
					<TestimonyNavigation onNext={handleNext} onPrevious={handlePrevious} />
				</div>
				<div className='relative min-w-screen overflow-hidden'>
					<div
						className='grid grid-flow-col min-w-[100vw] transition-transform duration-300 gap-x-4 bg-green-100'
						style={{ transform: `translateX(-${currentTestimonyIndex * 50}%)` }}
					>
						{renderedTestimonials}
					</div>
				</div>
			</div>
		</div>
	);
}
