import React from 'react';

export default function AgentsSkeleton() {
	return (
		<div className='w-full h-full flex bg-base-100'>
			<div className='flex-1 h-full flex flex-col overflow-y-hidden'>
				<div className='w-full h-full overflow-auto md:overflow-hidden border-r border-neutral'>
					<table className='w-full h-fit'>
						<thead className='h-[3em] border-b border-neutral'>
							<tr className=''>
								<th className='lg:w-fit px-4 lg:pl-36'>
									<div className='centering-flex gap-x-4 cursor-pointer'>
										<div className='skeleton h-4 w-16 bg-neutral'></div>
									</div>
								</th>
								<th className='lg:w-fit px-4'>
									<div className='centering-flex gap-x-4 cursor-pointer'>
										<div className='skeleton h-4 w-16 bg-neutral'></div>
									</div>
								</th>
								<th className='lg:w-[50%] px-4'>
									<div className='centering-flex gap-x-2'>
										<p className='text-blue-dimata-2'></p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='h-[3em] w-full'>
								<td colSpan={3} className='w-full px-4 py-2 lg:pl-20'>
									<div className='w-full centering-flex gap-x-8'>
										<div className='avatar placeholder'>
											<div className='bg-neutral skeleton rounded-full w-8 h-8'></div>
										</div>
										<div className='flex flex-col gap-y-2'>
											<div className='skeleton h-2 w-36 bg-neutral'></div>
										</div>
									</div>
								</td>
							</tr>
							{Array(5)
								.fill('')
								.map((_, index) => (
									<tr key={index} className='h-[3em] w-full'>
										<td className='px-4 py-2 w-[24em] lg:pl-20 centering-flex gap-x-4'>
											<div className='avatar placeholder'>
												<div className='bg-neutral skeleton rounded-full w-8 h-8'></div>
											</div>
											<div className='flex flex-col gap-y-2'>
												<div className='skeleton h-2 w-36 bg-neutral'></div>
												<div className='skeleton h-2 w-16 bg-neutral'></div>
											</div>
										</td>
										<td className='px-4 py-2'>
											<div className='skeleton h-4 w-16 bg-neutral'></div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex flex-col'></div>
		</div>
	);
}
