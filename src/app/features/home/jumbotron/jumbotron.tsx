export default function Jumbotron() {
	return (
		<div className='w-full centering-flex justify-between px-24 gap-x-10 z-20 bg-transparent'>
			<div className='flex flex-col gap-y-4 pl-20'>
				<h2 className='text-5xl font-light'>
					Deliver <span className='font-bold'>Faster</span>{' '}
					<span className='font-bold text-purple-dimata'>Support</span> <br />
					With Our Help Desk <br /> System
				</h2>
				<div className='jumbotron-dashed-border w-[200px]'></div>
				<p className='text-md text-black-dimata2'>
					Provide excellent customer service. Answer more <br />
					tickets all-in-one Primarily software.
				</p>
				<div className='centering-flex gap-x-4'>
					<button className='btn btn-lg bg-[#303030] text-white text-sm uppercase rounded-4xl'>
						Get Started
					</button>
					<button className='btn btn-lg bg-base-200 text-primary-text text-sm uppercase rounded-4xl'>
						Request A Demo
					</button>
				</div>
			</div>
			<div className='w-[640px] h-auto overflow-hidden rounded-xl shadow-xl'>
				<img
					alt='Jumbotron Image'
					src='/banner/jumbotron-banner.svg'
					className='w-full h-full object-cover rounded-xl'
				/>
			</div>
		</div>
	);
}
