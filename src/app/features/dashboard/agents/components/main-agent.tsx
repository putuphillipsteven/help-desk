'use client';

import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import AddNewAgentButton from './button';
import AgentList from './agent-list';
import { Agents } from '../data/dummyAgents';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { logging } from '@/app/lib/utils/logging/logging';
import clsx from 'clsx';

interface MainAgentProps {
	agents: Agents;
	children?: React.ReactNode;
}

export default function MainAgent({ agents, children }: MainAgentProps) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);
	const agentId = searchParams.get('agId');
	const agentParams = agentId ? `&agId=${agentId}` : '';
	const name = searchParams.get('na');
	const role = searchParams.get('ro');

	useEffect(() => {
		if (!params.get('na') && !params.get('ro')) {
			params.set('na', 'asc');
			router.replace(`?${params.toString()}`);
		}
	}, [params, router]);

	const handleSort = (sort: string) => {
		const newParams = new URLSearchParams(searchParams);
		if (sort === 'na') {
			newParams.delete('ro');
			newParams.delete('agId');
			const currentSort = newParams.get('na');
			logging('na', currentSort);
			if (currentSort === 'desc') {
				newParams.set('na', 'asc');
			} else {
				newParams.set('na', 'desc');
			}
		} else if (sort === 'ro') {
			newParams.delete('na');
			newParams.delete('agId');
			const currentSort = newParams.get('ro');
			logging('ro', currentSort);
			if (currentSort === 'desc') {
				newParams.set('ro', 'asc');
			} else {
				newParams.set('ro', 'desc');
			}
		}
		router.replace(`?${newParams.toString()}${agentParams}`);
	};

	return (
		<div className='w-full h-full flex bg-base-100'>
			<div className='flex-1 h-full  flex flex-col overflow-y-hidden'>
				<div className='w-full h-full overflow-auto md:overflow-hidden border-r border-neutral'>
					<table className='w-full h-fit'>
						<thead className='h-[3em] border-b border-neutral'>
							<tr className=''>
								<th className='lg:w-fit px-4 lg:pl-36'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('na')}
									>
										<p className='font-medium'>Name</p>
										{name === 'desc' ? (
											<LiaSortAlphaUpSolid
												className={clsx('text-2xl', {
													'text-info-text': name,
													'text-primary-text': !name,
												})}
											/>
										) : (
											<LiaSortAlphaDownSolid
												className={clsx('text-2xl', {
													'text-info-text': name,
													'text-primary-text': !name,
												})}
											/>
										)}
									</div>
								</th>
								<th className='lg:w-fit'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('ro')}
									>
										<p className='font-medium'>Role</p>
										{role === 'desc' ? (
											<LiaSortAlphaUpSolid
												className={clsx('text-2xl', {
													'text-info-text': role,
													'text-primary-text': !role,
												})}
											/>
										) : (
											<LiaSortAlphaDownSolid
												className={clsx('text-2xl', {
													'text-info-text': role,
													'text-primary-text': !role,
												})}
											/>
										)}
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
									<div className='w-full'>
										<AddNewAgentButton />
									</div>
								</td>
							</tr>
							<AgentList agents={agents} />
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex'>{children}</div>
		</div>
	);
}
