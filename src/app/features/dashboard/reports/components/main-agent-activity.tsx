import AGAInputs from './agent-activity/ag-a-inputs';
import AGAFilter from './agent-activity/ag-filter';

export default function MainAgentActivity() {
	return (
		<div className='w-full h-full flex flex-col gap-y-4 shadow-lg rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between px-2'>
				<div className='centering-flex px-2'>
					<p className='text-xl font-medium'>Agent Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<AGAInputs />
				</div>
			</div>
			<div className='body-ticket-activity flex-1 w-full'>
				<AGAFilter />
			</div>
		</div>
	);
}
