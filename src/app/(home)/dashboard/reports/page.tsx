import MainReports from '@/app/features/dashboard/reports/main-reports';

export interface ReportPageParams {
	tasd: string;
	taed: string;
	tesd: string;
	teed: string;
	agsd: string;
	aged: string;
	agid: string;
}

export default function Page({ searchParams }: { searchParams: ReportPageParams }) {
	return (
		<MainReports
			aged={searchParams.aged}
			agsd={searchParams.agsd}
			taed={searchParams.taed}
			tasd={searchParams.tasd}
			teed={searchParams.teed}
			tesd={searchParams.tesd}
			agid={searchParams.agid}
		/>
	);
}
