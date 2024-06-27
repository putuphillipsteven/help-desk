export default function AgentListSkeleton() {
	return (
		<div className='w-full flex flex-col gap-y-2 h-[20em] overflow-auto no-scrollbar'>
			<div className='w-full flex gap-x-4'>
				<table className='w-full border-collapse relative'>
					<thead className='text-left text-primary-text text-xs sticky top-0 bg-white z-10'>
						<tr>
							<th className='pb-4 font-normal'>Name</th> {/* Add padding-bottom to create space */}
							<th className='w-[1%] whitespace-nowrap pr-2 pb-4 font-normal'>
								Amount of Tickets Open
							</th>
						</tr>
					</thead>
					<tbody>
						{Array(3)
							.fill('')
							.map((_, index) => {
								return (
									<tr key={index}>
										<td className='py-3'>
											<div className='centering-flex gap-x-2'>
												<div className='skeleton w-10 h-10 rounded-full bg-neutral'></div>
												<div className='flex flex-col gap-y-2'>
													<div className='skeleton w-20 h-2 bg-neutral'></div>
													<div className='skeleton w-20 h-2 bg-neutral'></div>
												</div>
											</div>
										</td>
										<td>
											<div className='centering-flex-col'>
												<div className='skeleton w-4 h-4 bg-neutral'></div>
											</div>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
