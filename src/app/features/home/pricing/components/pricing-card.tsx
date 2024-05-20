import { Pricing } from '@/app/lib/data/pricing';
import { makeWords } from '@/app/lib/utils/pricing/pricing';
import toRupiah from '@develoka/angka-rupiah-js';
import clsx from 'clsx';
import { IoCheckmark } from 'react-icons/io5';
export default function PricingCard({ accesses, description, name, price }: Pricing) {
	const renderedAccess = accesses?.map((acces, index) => {
		return (
			<li key={index} className='centering-flex gap-x-2'>
				<IoCheckmark className='text-green-dimata' />
				<p className='text-xs'>{acces}</p>
			</li>
		);
	});
	return (
		<div className='card w-72 bg-white shadow-xl items-center gap-y-4 p-8 text-center'>
			<h2 className='card-title'>{name}</h2>
			<div
				className={clsx(
					'centering-flex-col w-full gap-y-2 py-4 rounded-box relative overflow-hidden',
					{
						'bg-black-dimata': name.toLowerCase() === 'standard' || 'company',
						'bg-purple-dimata': name.toLowerCase() === 'plus',
					},
				)}
			>
				<p className='z-20 text-white font-bold'>{toRupiah(price)}</p>
				<p className='text-xs text-light-gray-dimata3'>per user per month</p>
				<p className='text-xs text-white w-[70%]'>{description}</p>
				<img
					src='pricing/light-gray.svg'
					className='w-28 absolute inset-y-0 -right-[40px] -top-[60px] z-20'
				/>
				<img
					src='pricing/light-purple.svg'
					className='w-20 absolute inset-y-0 -right-[20px] -top-[320px] z-0 rotate-15'
				/>
				<img
					src='pricing/light-gray.svg'
					className='w-28 absolute inset-y-0 -left-[60px] top-[80px] z-20 rotate-180'
				/>
				<img
					src='pricing/light-purple.svg'
					className='w-20 absolute inset-y-0 -left-[20px] top-[0] z-0 rotate-180'
				/>
			</div>
			<p className='text-xs font-medium'>{makeWords(name)}</p>
			<div className='divider m-0'></div>
			<ul className='text-left'>{renderedAccess}</ul>
			<div className='divider m-0'></div>
			<button className='btn  btn-block'>Get Started</button>
		</div>
	);
}
