import TEAFilter from './team-activity/te-a-filter';
import TEAInputs from './team-activity/te-a-inputs';

export default function MainTeamActivity() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between px-2'>
				<div className='centering-flex px-2'>
					<p>Team Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<TEAInputs />
				</div>
			</div>
			<div className='body-ticket-activity flex-1 h-full w-full'>
				<TEAFilter />
			</div>
		</div>
	);
}
