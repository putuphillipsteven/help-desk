import Image from 'next/image';

export default function About() {
	return (
		<div className='w-full centering-flex justify-between px-[240px] py-8'>
			<div className='flex flex-col gap-y-4 w-[50%]'>
				<button className='w-fit px-4 py-2 bg-orange-dimata1 rounded-box hover:cursor-default'>
					<p className='text-orange-dimata uppercase text-sm font-bold'>
						About Our Dimata Help Desk
					</p>
				</button>
				<h2 className='text-4xl font-light'>
					Transforming{' '}
					<span className='font-bold'>
						Help Desk <br />
						Management{' '}
					</span>
					With Dimata <br />
					Help Desk
				</h2>
				<p className='text-sm'>
					Experience the future of help desk management with Dimata Help Desk. Our SaaS web app
					offers intuitive support across all channels, proactively meeting customer needs.
				</p>
				<p className='text-sm'>
					Save time, reduce repetitive tasks, and empower your agents with workforce automation and
					knowledge-driven solutions.
				</p>
				<button className='w-fit px-4 py-2 bg-orange-gradient rounded-box hover:cursor-default'>
					<p className='text-orange-dimata uppercase text-sm font-bold'>Swift Ticket Resolution</p>
				</button>
				<button className='w-fit px-4 py-2 bg-purple-gradient rounded-box hover:cursor-default'>
					<p className='text-purple-dimata uppercase text-sm font-bold'>
						SEAMLESS MULTI-CHANNEL ENGAGEMENT
					</p>
				</button>
				<button className='w-fit px-4 py-2 bg-green-gradient rounded-box hover:cursor-default'>
					<p className='text-green-dimata uppercase text-sm font-bold'>
						EFFICIENTLY SCALE OPERATIONS
					</p>
				</button>
				<button className='btn btn-lg w-fit text-white text-sm uppercase rounded-4xl'>
					Try For Free
				</button>
			</div>
			<div className=''>
				<Image src={'about/main-image.svg'} width={640} height={0} alt='main-image' />
			</div>
		</div>
	);
}
