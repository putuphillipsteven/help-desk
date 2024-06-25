import React from 'react';

export default function AgentsSkeleton() {
	return (
		<div className='w-full h-full flex bg-base-100'>
			<div className='flex-1 h-full flex flex-col overflow-y-hidden'>
				<div className='w-full h-full overflow-auto md:overflow-hidden border-r border-neutral'>
					<table className='max-w-full h-fit'>
						<thead className='h-[3em] border-b border-neutral'>
							<tr>
								<th className='px-4 w-[50%] lg:pl-[7.2em]'>
									<div className='centering-flex gap-x-4'>
										<div className='skeleton h-4 w-16 bg-neutral'></div>
									</div>
								</th>
								<th className='w-[1%] whitespace-nowrap'>
									<div className='centering-flex gap-x-4'>
										<div className='skeleton h-4 w-16 bg-neutral'></div>
									</div>
								</th>
								<th className='px-4'></th>
							</tr>
						</thead>
						<tbody>
							<tr className='h-[3em]'>
								<td colSpan={3} className='px-4 py-2 lg:pl-16'>
									<div className='w-full centering-flex gap-x-2'>
										<div className='avatar placeholder'>
											<div className='bg-neutral skeleton rounded-full w-[2.5em] h-[2.5em]'></div>
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
									<tr key={index} className='h-[4em] w-full'>
										<td className='w-full centering-flex h-full px-4 lg:pl-16 cursor-pointer'>
											<div className='centering-flex gap-x-2'>
												<div className='avatar placeholder'>
													<div className='bg-neutral skeleton rounded-full w-[2.5em] h-[2.5em]'></div>
												</div>
												<div className='flex flex-col gap-y-2'>
													<div className='skeleton h-2 w-36 bg-neutral'></div>
													<div className='skeleton h-2 w-16 bg-neutral'></div>
												</div>
											</div>
										</td>
										<td className='w-[1%] whitespace-nowrap'>
											<div className='skeleton h-4 w-12 bg-neutral'></div>
										</td>
										<td className='px-4'>
											<div className='hidden lg:flex lg:flex-col gap-y-1 '>
												<div className='skeleton h-2 w-36 bg-neutral'></div>
												<div className='skeleton h-2 w-16 bg-neutral'></div>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex flex-col p-2'>
				<div className='skeleton h-4 w-36 bg-neutral'></div>
			</div>
		</div>
	);
}
