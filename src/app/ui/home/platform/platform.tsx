import Image from 'next/image';
import SectionButton from '../components/section-button';

export default function Platform() {
	return (
		<div className='px-[240px] py-8 w-full flex flex-col gap-y-8'>
			<div className='w-full centering-flex justify-between'>
				<div className='flex flex-col gap-y-4 w-[50%]'>
					<SectionButton colour='orange' text='Platform' />
					<h2 className='text-4xl font-light'>
						Get An Overview Of The <span className='font-bold'>Dimata Help Desk</span> Platform
					</h2>
				</div>
				<div className='flex w-[40%]'>
					<p className='text-sm text-justify'>
						Provide the best, most intuitive support across all channels. Proactively understand
						customer needs to serve excellence the first time.
					</p>
				</div>
			</div>
			<div>
				<Image src={'platform/platform-image.svg'} width={1080} height={0} alt='Platform Image' />
			</div>
		</div>
	);
}
