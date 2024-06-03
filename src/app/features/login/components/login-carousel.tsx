import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface CarouselItem {
	id: number;
	image: string;
	title: string;
	description: string;
	subDescription: string;
}

const data: CarouselItem[] = [
	{
		id: 1,
		image: '/login/wave-image-1.jpeg',
		title: 'Welcome to Dimata Help Desk',
		description: 'Lorem ipsum dolor sit amet.',
		subDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sit.',
	},
	{
		id: 2,
		image: '/login/wave-image-2.jpg',
		title: 'Welcome to Dimata Help Desk 2',
		description: 'Lorem ipsum dolor sit amet.',
		subDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sit.',
	},
	{
		id: 3,
		image: '/login/wave-image-3.jpg',
		title: 'Welcome to Dimata Help Desk 3',
		description: 'Lorem ipsum dolor sit amet.',
		subDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sit.',
	},
];

const LoginCarousel: React.FC = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const nextSlide = () => {
		const nextIndex = (activeSlide + 1) % data.length;
		setActiveSlide(nextIndex);
	};

	const prevSlide = () => {
		const nextIndex = (activeSlide - 1 + data.length) % data.length;
		setActiveSlide(nextIndex);
	};

	return (
		<div className='hidden justify-between md:flex md:flex-col md:flex-1 lg:w-[37em] h-full rounded-lg overflow-hidden relative'>
			<div className='carousel w-full h-full relative'>
				{data.map((item, index) => (
					<div
						id={`slide${item.id}`}
						key={item.id}
						className={`carousel-item relative w-full h-full ${
							index === activeSlide ? '' : 'hidden'
						}`}
					>
						<Image
							src={item.image}
							width={676}
							height={817}
							alt={`wave-image-${item.id}`}
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								zIndex: 0,
							}}
							priority={false}
						/>
						<div className='absolute w-full h-full bg-login-gradient z-10'></div>
						<div className='w-full h-full z-10 p-20 centering-flex-col justify-between'>
							<div className='centering-flex-col'>
								<h2 className='text-base-100 text-center'>{item.title}</h2>
								<h3 className='text-base-100 text-center'>{item.description}</h3>
							</div>
							<div className='centering-flex-col'>
								<p className='text-base-100 text-center'>{item.description}</p>
								<p className='text-base-100 text-xs text-center'>{item.subDescription}</p>
							</div>
						</div>
					</div>
				))}
				<div className='flex justify-center w-full py-2 gap-2 z-20 absolute bottom-0 mb-4'>
					{data.map((dotItem, index) => (
						<button
							key={dotItem.id}
							onClick={() => setActiveSlide(index)}
							// className={`w-3 h-3 rounded-full p-0 bg-neutral cursor-pointer z-20 ${
							// 	index === activeSlide ? 'bg-base-300' : ''
							// }`}
							className={clsx('h-3 rounded-full cursor-pointer z-20', {
								'w-6 bg-base-100': index === activeSlide,
								'w-3 bg-neutral': index !== activeSlide,
							})}
						></button>
					))}
				</div>
			</div>
		</div>
	);
};

export default LoginCarousel;
