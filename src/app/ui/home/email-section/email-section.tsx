import Image from 'next/image';
import { SecondaryButton } from '../components/button';

export default function EmailSection() {
	return (
		<div className='home-section py-16'>
			<div className='centering-flex justify-between bg-black-dimata p-16 rounded-box z-20 overflow-hidden relative'>
				<h2 className='section-main-text text-white'>
					Build Stronger{' '}
					<span className='font-bold'>
						Customer <br /> Relationships
					</span>
					With Dimata <br />
					Help Desk
				</h2>
				<Image
					style={{
						width: 'auto',
						height: 'auto',
					}}
					src='email-section/chat-box-2.svg'
					className='absolute -z-20 left-[70px] -top-[10px]'
					width={360}
					height={0}
					alt='chat-box'
				/>
				<Image
					style={{
						width: 'auto',
						height: 'auto',
					}}
					src='email-section/chat-box.svg'
					className='absolute -z-20  top-[50px]'
					width={480}
					height={120}
					alt='chat-box'
				/>
				<div className='centering-flex gap-x-4'>
					<input
						className='input input-lg rounded-4xl bg-light-gray-dimata3 text-white placeholder:text-white border-none focus:ring-0 focus:border-none focus:outline-0'
						placeholder='Enter your email'
						name='email'
						id='email'
						autoComplete='off'
					/>
					<SecondaryButton text='Submit' />
				</div>
			</div>
		</div>
	);
}
