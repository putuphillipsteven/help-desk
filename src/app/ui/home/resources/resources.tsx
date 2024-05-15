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
						<img src={'resources/profile.svg'} className='w-14' />
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
					<div className='' bg-red-100>
						<img src={'resources/profile-1.svg'} className='w-[480px]' />
					</div>
				</div>
				<div className='centering-flex flex-row-reverse justify-between w-full'>
					<div className='flex flex-col gap-y-4 w-[40%]'>
						<img src={'resources/books.svg'} className='w-14' />
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
					<div className='' bg-red-100>
						<img src={'resources/books-1.svg'} className='w-[480px]' />
					</div>
				</div>
				<div className='centering-flex justify-between w-full'>
					<div className='flex flex-col gap-y-4 w-[40%]'>
						<img src={'resources/chat-box.svg'} className='w-14' />
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
					<div className='' bg-red-100>
						<img src={'resources/chat-box-1.svg'} className='w-[480px]' />
					</div>
				</div>
			</div>
		</div>
	);
}
