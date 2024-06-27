import InputSkeleton from '@/app/features/dashboard/reports/components/skeleton/input-skeleton';

export default function Loading() {
	return (
		<div className='w-full h-full flex flex-col'>
			<div className='centering-flex w-full h-[3em] flex justify-between  border-b border-neutral p-2'>
				<div className='skeleton h-4 w-20 bg-neutral'></div>
				<div className='centering-flex gap-x-2'>
					<div className='skeleton h-8 w-8 bg-neutral'></div>
					<InputSkeleton />
				</div>
			</div>
			<div className='body-reports w-full flex-1  flex flex-col gap-y-2 p-2'>
				<div className='flex-1 w-full flex gap-x-2'>
					<div className='flex-1 bg-white'>
						<div className='w-full h-full bg-neutral skeleton'></div>
					</div>
					<div className='flex-1 bg-white'>
						<div className='w-full h-full bg-neutral skeleton'></div>
					</div>
				</div>
				<div className='flex-1 w-full bg-white'>
					<div className='w-full h-full bg-neutral skeleton'></div>
				</div>
			</div>
		</div>
	);
}
