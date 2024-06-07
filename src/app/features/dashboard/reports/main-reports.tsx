import MainAgentActivity from './components/main-agent-activity';
import MainTeamActivity from './components/main-team-activity';
import MainTicketActivity from './components/main-ticket-activity';

export default function MainReports() {
	return (
		<div className='main-reports w-full h-full flex flex-col'>
			<div className='header-reports w-full h-[3em] flex justify-between  border-b border-neutral'>
				<div className='centering-flex px-2'>
					<p>Reports</p>
				</div>
				<div className='centering-flex p-2 gap-x-2'>
					<input
						type='text'
						className={
							'h-full input input-bordered text-primary-text bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
						}
						autoComplete='off'
						placeholder='Input text...'
					/>
					<input
						type='date'
						className={
							'h-full w-full input input-bordered text-primary-text bg-transparent input-md border-[1.5px] border-primary-text focus:ring-0 focus:outline-0'
						}
						autoComplete='off'
					/>
					<p>Day</p>
					<p>Week</p>
					<p>Month</p>
				</div>
			</div>
			<div className='body-reports w-full flex-1  flex flex-col gap-y-2 p-2'>
				<div className='flex-1 w-full flex gap-x-2'>
					<div className='flex-1'>
						<MainTicketActivity />
					</div>
					<div className='flex-1'>
						<MainTeamActivity />
					</div>
				</div>
				<div className='flex-1 w-full'>
					<MainAgentActivity />
				</div>
			</div>
		</div>
	);
}
