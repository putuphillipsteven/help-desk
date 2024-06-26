import Image from 'next/image';
import SectionButton from '../components/section-button';
import GradientButton from '../components/gradient-button';

export default function About() {
	return (
		<div className='home-section py-16 centering-flex justify-between'>
			<div className='flex flex-col gap-y-4 w-[50%]'>
				<SectionButton colour='orange' text='About Our Dimata Help Desk' />
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

				<GradientButton colour='orange' text='Swift Ticket Resolution' />
				<GradientButton colour='purple' text='Seamless Multi-Channel Engagement' />
				<GradientButton colour='green' text='Efficiently Scale Operations' />

				<button className='btn btn-lg bg-[#303030] w-fit text-white text-sm uppercase rounded-4xl'>
					Try For Free
				</button>
			</div>
			<div className=''>
				<Image src={'about/main-image.svg'} width={640} height={0} alt='main-image' />
			</div>
		</div>
	);
}
