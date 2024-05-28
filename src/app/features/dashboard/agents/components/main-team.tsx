'use client';

import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import AddNewAgentButton, { CreateNewTeamButton } from './button';
import AgentList from './agent-list';
import { agents } from '../data/agents';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import TeamList from './team-list';
import { teams } from '../data/team';

interface MainTeamProps {
	children?: React.ReactNode;
}

export default function MainTeam({ children }: MainTeamProps) {
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
			<div className='w-full h-full flex-1 bg-white flex flex-col'>
				<div className='w-full min-h-screen border-r border-neutral'>
					<table className='w-full h-fit'>
						<thead className='h-12 border-b border-neutral'>
							<tr className=''>
								<th className='w-[50%] pl-36'>
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
								<th className='flex-1'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('ro')}
									>
										<p className='font-medium'>Agent</p>
										{role === 'desc' ? (
											<LiaSortAlphaUpSolid className='text-2xl text-primary-text' />
										) : (
											<LiaSortAlphaDownSolid className='text-2xl text-primary-text' />
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
									<CreateNewTeamButton />
								</td>
								<td></td>
								<td></td>
							</tr>
							<TeamList team={teams} />
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full bg-white overflow-hidden'>{children}</div>
		</div>
	);
}
