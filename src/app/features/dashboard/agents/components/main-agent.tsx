'use client';

import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import AddNewAgentButton from './button';
import AgentList from './agent-list';
import { agents } from '../data/agents';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TbEdit } from 'react-icons/tb';

interface MainAgentProps {
	children?: React.ReactNode;
	id?: string;
}

export default function MainAgent({ id, children }: MainAgentProps) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const name = searchParams.get('na');
	const role = searchParams.get('ro');
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		// Initialize the search param 'na' to 'asc' if it's not set and 'ro' is not set
		if (!params.get('na') && !params.get('ro')) {
			params.set('na', 'asc');
			router.replace(`?${params.toString()}`);
		}
	}, []);

	const handleSort = (sort: string) => {
		const newParams = new URLSearchParams(searchParams);

		// Remove the other sort parameter if a different sort is clicked
		if (sort === 'na') {
			newParams.delete('ro');
			const currentSort = newParams.get('na');
			if (currentSort === 'asc') {
				newParams.set('na', 'desc');
			} else {
				newParams.set('na', 'asc');
			}
		} else if (sort === 'ro') {
			newParams.delete('na');
			const currentSort = newParams.get('ro');
			if (currentSort === 'asc') {
				newParams.set('ro', 'desc');
			} else {
				newParams.set('ro', 'asc');
			}
		}
		router.replace(`?${newParams.toString()}`);
	};

	return (
		<div className='w-full h-full flex'>
			<div className='w-full h-full bg-white flex flex-col'>
				<div className='w-full h-full border-r border-light-gray-dimata-5'>
					<table className='w-full h-full'>
						<thead className='h-12 border-b border-light-gray-dimata-5'>
							<tr className=''>
								<th className='w-[50%] pl-36'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('na')}
									>
										<p className='font-medium'>Name</p>
										{name === 'desc' ? (
											<LiaSortAlphaUpSolid className='text-2xl text-black-dimata' />
										) : (
											<LiaSortAlphaDownSolid className='text-2xl text-black-dimata' />
										)}
									</div>
								</th>
								<th className='flex-1'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('ro')}
									>
										<p className='font-medium'>Role</p>
										{role === 'desc' ? (
											<LiaSortAlphaUpSolid className='text-2xl text-black-dimata' />
										) : (
											<LiaSortAlphaDownSolid className='text-2xl text-black-dimata' />
										)}
									</div>
								</th>
								<th className='w-[40%] pr-36'>
									<div className='centering-flex gap-x-2'>
										<p className='text-blue-dimata-2'></p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='h-12'>
								<td className='centering-flex h-full pl-20'>
									<AddNewAgentButton />
								</td>
								<td></td>
								<td></td>
							</tr>
							<AgentList agents={agents} />
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full bg-white overflow-hidden'>{children}</div>
		</div>
	);
}
