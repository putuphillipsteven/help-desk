import { BackButton } from '@/app/components/button';
import { HiOutlineTrash } from 'react-icons/hi';
import { LuArchive } from 'react-icons/lu';
import { RiArrowLeftSLine, RiArrowRightSLine, RiSpam2Line } from 'react-icons/ri';

export default function MainDetailsSkeleton() {
	return (
		<div className='w-full h-fit flex flex-col justify-start lg:flex-row lg:h-full gap-x-0 bg-base-100 no-scrollbar'>
			<div className='w-full h-full grid grid-rows-[3em_3em_fit_auto] grid-cols-1 lg:flex-1 lg:grid-rows-[3em_3em_auto] border-neutral'>
				<div className='w-full h-full lg:h-full centering-flex justify-between items-start py-2 px-4 border-b border-r border-neutral lg:justify-normal lg:gap-x-2'>
					<BackButton />
					<div className='skeleton h-4 w-28 bg-gray-200'></div>
				</div>
				<div className='w-full h-fit lg:hidden'>
					{/* <RightSideNavDetails
						agent={ticket?.agent}
						createdAt={ticket?.createdAt}
						details={ticket?.details}
						id={ticket?.id}
						priority={ticket?.priority}
						status={ticket?.status}
						subject={ticket?.subject}
						team={ticket?.team}
						user={ticket?.user}
					/> */}
				</div>
				<div className='w-full h-[3em] centering-flex justify-between gap-x-2 py-2 px-4 border-b border-r border-neutral'>
					<div className='centering-flex gap-x-8'>
						<LuArchive className='text-primary-text text-2xl' />
						<RiSpam2Line className='text-primary-text text-2xl' />
						<HiOutlineTrash className='text-primary-text text-2xl' />
					</div>
					<div className='centering-flex gap-x-6'>
						<RiArrowLeftSLine className='text-primary-text text-2xl' />
						<RiArrowRightSLine className='text-primary-text text-2xl' />
					</div>
				</div>
				<div className='w-full h-full centering-flex-col p-4 gap-y-8 py-8 border-r border-neutral lg:px-40'>
					<div className='w-full  flex flex-col gap-x-2 border border-neutral drop-shadow-sm rounded-md overflow-hidden'>
						<div className='p-2 bg-primary-content centering-flex justify-between'>
							<div className='skeleton h-4 w-40 bg-gray-200'></div>
							<div className='skeleton h-4 w-28 bg-gray-200'></div>
						</div>
						<div className='p-2 flex flex-col gap-y-2'>
							<div className='skeleton h-4 w-full bg-gray-200'></div>
							<div className='skeleton h-4 w-full bg-gray-200'></div>
							<div className='skeleton h-4 w-full bg-gray-200'></div>
						</div>
					</div>
					<div className='w-full h-40 centering-flex-col gap-y-2'>
						<div className='skeleton w-full h-40 bg-gray-200'></div>
						<button
							type='submit'
							className='btn btn-md place-self-end  bg-primary border-transparent text-base-100 hover:text-info-text hover:border hover:border-primary hover:bg-transparent'
						>
							Submit
						</button>
					</div>
				</div>
			</div>
			<div className='w-full h-full hidden lg:flex lg:w-[240px]'>
				{/* <RightSideNavDetails
					agent={ticket?.agent}
					createdAt={ticket?.createdAt}
					details={ticket?.details}
					id={ticket?.id}
					priority={ticket?.priority}
					status={ticket?.status}
					subject={ticket?.subject}
					team={ticket?.team}
					user={ticket?.user}
				/> */}
			</div>
		</div>
	);
}
