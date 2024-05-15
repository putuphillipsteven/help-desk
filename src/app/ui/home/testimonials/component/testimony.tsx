import { Testimony as TestimonyType } from '@/app/lib/data/testimonials';

export default function Testimony({
	userName,
	company,
	logo,
	position,
	testimony,
	avatar,
	id,
}: TestimonyType) {
	return (
		<div
			id={`item${id}`}
			className='card w-[400px] bg-light-gray-dimata text-black-dimata carousel-item'
		>
			<div className='card-body'>
				<div className='flex flex-col gap-y-2'>
					<div className='centering-flex justify-between'>
						<div className='centering-flex gap-x-2'>
							<div className='avatar'>
								<div className='w-12 rounded-badge'>
									<img src={avatar} />
								</div>
							</div>
							<div className='flex flex-col'>
								<h3 className='card-title'>{userName}</h3>
								<p className='text-xs text-blue-500'>{position}</p>
							</div>
						</div>
						<div className='centering-flex gap-x-2'>
							<div className='avatar'>
								<div className='w-6 rounded-badge'>
									<img src={logo} />
								</div>
							</div>
							<p className='text-xs'>{company}</p>
						</div>
					</div>
					<div className='divider m-0'></div>
					<p className='text-xs'>{`"${testimony}"`}</p>
				</div>
			</div>
		</div>
	);
}
