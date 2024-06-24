import { teamLists } from '@/app/features/dashboard/agents/data/dummyTeams';
import { CompanyAvatar } from '@/app/features/dashboard/components/avatar';

export default function TeamList() {
	const renderedTeams = teamLists?.map((team) => {
		return (
			<div className=' centering-flex w-full gap-x-8' key={team.name}>
				<CompanyAvatar teamName={team.name} key={team.name} numberOfAgents={'7'} />
				<p className='text-sm'>7 Tickets</p>
			</div>
		);
	});
	return <div className='px-2 py-4 flex flex-col gap-y-4'>{renderedTeams}</div>;
}
