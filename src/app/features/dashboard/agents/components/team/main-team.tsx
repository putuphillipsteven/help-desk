import { CreateNewTeamButton } from '../button';
import { Suspense } from 'react';
import TableHeadSort from '../table-head-sort';
import TeamList from './team-list';
import TeamDetails from './team-details';
import TeamDetailsSkeleton from './team-details-skeleton';

interface MainTeamProps {
	page: string;
	name: string;
	teamId: string;
}

export default async function MainTeam({ teamId, name, page }: MainTeamProps) {
	return (
		<div className='w-full h-full flex bg-base-100'>
			<div className='flex-1 h-full  flex flex-col overflow-y-hidden'>
				<div className='w-full h-full overflow-auto md:overflow-hidden border-r border-neutral'>
					<table className='w-full h-fit'>
						<thead className='h-[3em] border-b border-neutral'>
							<TableHeadSort uses='team' />
						</thead>
						<tbody>
							<tr className='h-[3em] w-full'>
								<td colSpan={3} className='w-full h-full px-4 py-2 lg:pl-16'>
									<CreateNewTeamButton />
								</td>
							</tr>
							<TeamList name={name} page={page} teamId={teamId} />
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-[240px] h-full overflow-hidden hidden lg:flex p-2'>
				<Suspense fallback={<TeamDetailsSkeleton />}>
					<TeamDetails teamId={teamId} />
				</Suspense>
			</div>
		</div>
	);
}
