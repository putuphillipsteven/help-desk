import AGAInputs from './agent-activity/ag-a-inputs';
import TEAInputs from './team-activity/te-a-inputs';

export default function MainAgentActivity() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between'>
				<div className='centering-flex px-2'>
					<p>Agent Activity</p>
				</div>
				<div className='centering-flex h-full p-2 gap-x-2 w-fit'>
					<AGAInputs />
				</div>
			</div>

			<div className='body-ticket-activity flex-1 w-full'>
				<p>Body</p>
			</div>
		</div>
	);
}
