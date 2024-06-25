import React from 'react';

export default function MainTeamSkeleton() {
	return (
		<div className='w-full h-full flex bg-base-100'>
			<div className='flex-1 h-full flex flex-col overflow-y-hidden'>
				<div className='w-full h-full overflow-auto md:overflow-hidden border-r border-neutral'>
					<table className='w-full h-fit'>
						<thead className='h-[3em] border-b border-neutral'>
							<tr className='h-[3em'>
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
								<th className={'hidden xs:flex'}>
									<div className='centering-flex gap-x-2'>
										<p className='text-blue-dimata-2'></p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='h-[3em] w-full'>
								<td colSpan={3} className='w-full px-4 py-2 lg:pl-16'>
									<div className='w-full centering-flex gap-x-4'>
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
											<div className='centering-flex gap-x-4'>
												<div className='avatar placeholder'>
													<div className='bg-neutral skeleton rounded-md w-[2.5em] h-[2.5em]'></div>
												</div>
												<div className='flex flex-col gap-y-2'>
													<div className='skeleton h-2 w-20 bg-neutral'></div>
													<div className='skeleton h-2 w-16 bg-neutral'></div>
												</div>
											</div>
										</td>
										<td className='w-[1%] whitespace-nowrap pr-2'>
											<div className='avatar-group -space-x-4 w-full'>
												<div className='bg-neutral skeleton rounded-full w-[3em] h-[3em] border-4 border-white'></div>
												<div className='bg-neutral skeleton rounded-full w-[3em] h-[3em] border-4 border-white'></div>
												<div className='bg-neutral skeleton rounded-full w-[3em] h-[3em] border-4 border-white'></div>
											</div>
										</td>
										<td className='hidden xs:flex px-1'></td>
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
