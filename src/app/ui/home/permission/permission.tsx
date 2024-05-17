import Image from 'next/image';
import GradientButton from '../components/gradient-button';
import SectionButton from '../components/section-button';

export default function Permission() {
	return (
		<div className='home-section py-32 bg-purple-dimata'>
			<div className='centering-flex justify-between'>
				<div className='flex flex-col gap-y-4'>
					<SectionButton colour='purple' text='Permission' />
					<h2 className='section-main-text text-white'>
						User Role & <span className='font-bold'>Permission</span>
					</h2>
					<p className='text-sm text-white w-[70%]'>
						Increase engagement and make buying easy with our stylish live chat widget. Provide
						personalized real-time support customers and visited pages.
					</p>
					<GradientButton colour='purple-int' text='Edit Messenger Intro and Localitazion.' />
					<GradientButton colour='purple-int' text='Edit Teammate Permissions.' />
					<GradientButton
						colour='purple-int'
						text='Can Access People, Companies, and Account Lists.'
					/>
				</div>
				<Image
					style={{
						width: 'auto',
						height: 'auto',
					}}
					src={'permission/main-image.svg'}
					width={500}
					height={0}
					alt='Resources Images'
				/>
			</div>
		</div>
	);
}
