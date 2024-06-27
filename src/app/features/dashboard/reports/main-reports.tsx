import MainAgentActivity from './components/main-agent-activity';
import MainTeamActivity from './components/main-team-activity';
import MainTicketActivity from './components/main-ticket-activity';
import MainReportInputs from './components/main-reports-inputs';
import { Suspense } from 'react';
import TicketActivitySkeleton from './components/skeleton/ticket-activity-skeleton';
import { ReportPageParams } from '@/app/(home)/dashboard/reports/page';

export default async function MainReports({
	aged,
	agsd,
	taed,
	tasd,
	teed,
	tesd,
	agid,
}: ReportPageParams) {
	return (
		<div className='main-reports w-full min-h-screen flex flex-col overflow-x-hidden'>
			<div className='header-reports w-full h-fit lg:h-[3em] flex flex-col md:flex-row md:justify-between md:items-center  border-b border-neutral'>
				<div className='centering-flex px-2'>
					<p>Reports</p>
				</div>
				<div className='centering-flex h-full p-2 w-full md:w-fit'>
					<MainReportInputs />
				</div>
			</div>
			<div className='body-reports w-full flex-1  flex flex-col gap-y-2 p-2'>
				<div className='flex-1 w-full flex flex-col gap-y-2 md:flex-row gap-x-2'>
					<div className='flex-1 bg-white'>
						<Suspense fallback={<TicketActivitySkeleton />}>
							<MainTicketActivity />
						</Suspense>
					</div>
					<div className='flex-1 bg-white'>
						<MainTeamActivity />
					</div>
				</div>
				<div className='flex-1 w-full bg-white'>
					<MainAgentActivity agid={agid} />
				</div>
			</div>
		</div>
	);
}
