import AGAInputs from './agent-activity/date-filter/ag-ac-date-filter';
import AgAcDateFilter from './agent-activity/date-filter/ag-ac-date-filter';
import AgAStatusFilter from './agent-activity/status-filter/ag-a-status-filter';

interface MainAgentActivityProps {}

export default function MainAgentActivity() {
	return (
		<div className='w-full h-full flex flex-col gap-y-4 shadow-lg rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between px-2'>
				<div className='centering-flex px-2'>
					<p className='text-xl font-medium'>Agent Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<AgAcDateFilter />
				</div>
			</div>
			<div className='body-team-activity flex-1 h-full w-full'>
				<AgAStatusFilter />
			</div>
		</div>
	);
}
