'use client';

import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import AddNewAgentButton from './button';
import AgentList from './agent-list';
import { agents } from '../data/agents';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface MainAgentProps {
	children?: React.ReactNode;
}

export default function MainAgent({ children }: MainAgentProps) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const name = searchParams.get('na');
	const role = searchParams.get('ro');
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		if (!params.get('na') && !params.get('ro')) {
			params.set('na', 'asc');
			router.replace(`?${params.toString()}`);
		}
	}, []);

	const handleSort = (sort: string) => {
		const newParams = new URLSearchParams(searchParams);

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
			<div className='w-full h-full flex-1 flex flex-col'>
				<div className='w-full h-full overflow-hidden border-r border-neutral'>
					<table className='w-full h-full'>
						<thead className='h-[3em] border-b border-neutral'>
							<tr className=''>
								<th className='md:w-[50%] px-4 md:pl-36'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('na')}
									>
										<p className='font-medium'>Name</p>
										{name === 'desc' ? (
											<LiaSortAlphaUpSolid className='text-2xl text-primary-text' />
										) : (
											<LiaSortAlphaDownSolid className='text-2xl text-primary-text' />
										)}
									</div>
								</th>
								<th className='md:flex-1 pr-4 '>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('ro')}
									>
										<p className='font-medium'>Role</p>
										{role === 'desc' ? (
											<LiaSortAlphaUpSolid className='text-2xl text-primary-text' />
										) : (
											<LiaSortAlphaDownSolid className='text-2xl text-primary-text' />
										)}
									</div>
								</th>
								<th className='hidden md:w-[40%] md:pr-36'>
									<div className='centering-flex gap-x-2'>
										<p className='text-blue-dimata-2'></p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='h-[3em]'>
								<td className='centering-flex h-full px-4 py-2 md:pl-20'>
									<AddNewAgentButton />
								</td>
								<td></td>
								<td className=''></td>
							</tr>
							<AgentList agents={agents} children={children} />
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex'>{children}</div>
		</div>
	);
}
