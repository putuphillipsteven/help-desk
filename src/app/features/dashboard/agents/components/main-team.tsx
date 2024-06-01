'use client';

import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import { CreateNewTeamButton } from './button';
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
	}, [params, router]);

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
			<div className='w-full h-full bg-base-100 flex-1 flex flex-col'>
				<div className='w-full h-full overflow-hidden border-r border-neutral'>
					<table className='w-full h-fit'>
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
								<th className='md:w-[50%] px-4 md:pl-36'>
									<div
										className='centering-flex gap-x-4 cursor-pointer'
										onClick={() => handleSort('ag')}
									>
										<p className='font-medium'>Agent</p>
										{role === 'desc' ? (
											<LiaSortAlphaUpSolid className='text-2xl text-primary-text' />
										) : (
											<LiaSortAlphaDownSolid className='text-2xl text-primary-text' />
										)}
									</div>
								</th>
								<th className='md:w-[50%] px-4 md:pl-36'>
									<div className='centering-flex gap-x-2'>
										<p className='text-blue-dimata-2'></p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='h-[3em]'>
								<td className='centering-flex h-full px-4 py-2 md:pl-20'>
									<CreateNewTeamButton />
								</td>
								<td></td>
								<td className=''></td>
							</tr>
							<TeamList team={teams}>{children}</TeamList>
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden xl:flex'>{children}</div>
		</div>
	);
}
