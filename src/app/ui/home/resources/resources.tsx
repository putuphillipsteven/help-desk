import Image from 'next/image';
import SectionButton from '../components/section-button';

export default function Resources() {
	return (
		<div className='home-section py-16 centering-flex-col gap-y-4'>
			<SectionButton colour='orange' text='Resources' />
			<h2 className='section-main-text text-center'>
				Supercharge Your Workflow With
				<br />
				<span className='font-bold'>Powerful Resources</span>
			</h2>
			<div className='centering-flex-col gap-y-4 mt-8'>
				<div className='centering-flex justify-between w-full'>
					<div className='flex flex-col gap-y-4 w-[40%]'>
						<Image
							style={{
								width: 'auto',
								height: 'auto',
							}}
							src={'resources/profile.svg'}
							width={56}
							height={56}
							alt='Resources Images'
						/>
						<h4>
							Provide Multi-Channel Customer Support <br />
							24/7
						</h4>
						<p className='text-xs w-[80%]'>
							Stay in touch with customers anytime, wherever you are, on web and mobile. Assist them
							via chat, email, and offer a 24/7 customer self-service knowledge base.
						</p>
						<button className='btn btn-lg w-fit text-white text-sm uppercase rounded-4xl'>
							Get Started
						</button>
					</div>
					<div>
						<Image
							style={{
								width: 'auto',
								height: 'auto',
							}}
							src={'resources/profile-1.svg'}
							width={480}
							height={0}
							alt='Resources Images'
						/>
					</div>
				</div>
				<div className='centering-flex flex-row-reverse justify-between w-full'>
					<div className='flex flex-col gap-y-4 w-[40%]'>
						<Image
							style={{
								width: 'auto',
								height: 'auto',
							}}
							src={'resources/books.svg'}
							width={56}
							height={56}
							alt='Resources Images'
						/>
						<h4>
							Free Training And Demos From <br />
							The Dimata's Team
						</h4>
						<p className='text-xs w-[80%]'>
							Stay in touch with customers anytime, wherever you are, on web and mobile. Assist them
							via chat, email, and offer a 24/7 customer self-service knowledge base.
						</p>
						<button className='btn btn-lg w-fit text-white text-sm uppercase rounded-4xl'>
							Get Started
						</button>
					</div>
					<div>
						<Image
							style={{
								width: 'auto',
								height: 'auto',
							}}
							src={'resources/books-1.svg'}
							width={480}
							height={0}
							alt='Resources Images'
						/>
					</div>
				</div>
				<div className='centering-flex justify-between w-full'>
					<div className='flex flex-col gap-y-4 w-[40%]'>
						<Image
							style={{
								width: 'auto',
								height: 'auto',
							}}
							src={'resources/chat-box.svg'}
							width={56}
							height={56}
							alt='Resources Images'
						/>
						<h4>
							Live Chat, About Support, <br />
							Marketing, Product, And More
						</h4>
						<p className='text-xs w-[80%]'>
							Stay in touch with customers anytime, wherever you are, on web and mobile. Assist them
							via chat, email, and offer a 24/7 customer self-service knowledge base.
						</p>
						<button className='btn btn-lg w-fit text-white text-sm uppercase rounded-4xl'>
							Get Started
						</button>
					</div>
					<div>
						<Image
							src={'resources/chat-box-1.svg'}
							width={480}
							height={0}
							alt='Resources Images'
							style={{
								width: 'auto',
								height: 'auto',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
