import Image from 'next/image';
import SectionButton from '../components/section-button';
import GradientButton from '../components/gradient-button';

export default function Integration() {
	return (
		<div className='home-section py-16 centering-flex-col gap-y-8 bg-purple-dimata relative'>
			<SectionButton colour='purple' text='Integration' />
			<h2 className='text-3xl font-light text-white text-center'>
				Connect With Your Customers <br />
				On <span className='font-bold'>All Channels</span>
			</h2>
			<Image
				style={{
					width: 'auto',
					height: 'auto',
				}}
				alt='Background Image'
				src={'integration/main-image-background.svg'}
				className='absolute inset-y-0 top-[72px]'
				width={1080}
				height={0}
			/>
			<Image
				style={{
					width: 'auto',
					height: 'auto',
				}}
				alt='Integration Image'
				src={'integration/main-image.svg'}
				width={800}
				height={0}
				className='z-20'
			/>
			<p className='text-center text-white text-sm w-[60%]'>
				Increase engagement and make buying easy with our stylish live chat widget. Provide
				personalized real-time support and invite your customers to chat based on the time spent on
				your site, location, and visited pages.
			</p>
			<div className='centering-flex gap-x-8'>
				<GradientButton colour='purple-int' text='Advanced Search' />
				<GradientButton colour='purple-int' text='Multi-Channel Communication' />
				<GradientButton colour='purple-int' text='Advanced Security' />
			</div>
		</div>
	);
}
