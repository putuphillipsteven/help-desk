import TEAFilter from './team-activity/status-filter/te-a-status-filter';
import TEADateFilter from './team-activity/date-filter/te-a-date-filter';
import TeamList from './team-activity/team-list/team-list';
import { Suspense } from 'react';
import TeamListSkeleton from './skeleton/team-list-skeleton';

export default function MainTeamActivity() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg rounded-md gap-y-4'>
			<div className='header-team-activity w-full h-[3em] flex justify-between px-2 gap-y-2'>
				<div className='centering-flex p-2'>
					<p className='font-medium text-xl'>Team Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<TEADateFilter />
				</div>
			</div>
			<div className='header-team-activity flex-1 h-full w-full'>
				<TEAFilter />
				<Suspense fallback={<TeamListSkeleton />}>
					<TeamList />
				</Suspense>
			</div>
		</div>
	);
}
