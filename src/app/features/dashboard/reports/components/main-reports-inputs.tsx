'use client';

import DayInput from '@/app/components/day-input';
import MonthInput from '@/app/components/month-input';
import WeekInput from '@/app/components/week-input';
import { formatDay } from '@/app/lib/utils/dating/dating';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import MainReportDisplayDate from './main-report-display-date';
import ExpendableInput from '@/app/components/expendable-input';

export default function MainReportInputs() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const defaultDate = new Date();

	const ticketActivityStartDate = params.get('tasd');
	const teamActivityStartDate = params.get('tesd');
	const agentActivityStartDate = params.get('agsd');

	const isGlobal =
		ticketActivityStartDate === teamActivityStartDate &&
		teamActivityStartDate === agentActivityStartDate;

	useEffect(() => {
		if (!params.get('tasd') && !params.get('taed')) {
			params.set('tasd', formatDay(defaultDate.toString()).startDate);
			params.set('taed', formatDay(defaultDate.toString()).endDate);
			params.set('agsd', formatDay(defaultDate.toString()).startDate);
			params.set('aged', formatDay(defaultDate.toString()).endDate);
			params.set('tesd', formatDay(defaultDate.toString()).endDate);
			params.set('teed', formatDay(defaultDate.toString()).endDate);
			router.replace(`?${params.toString()}`);
		}
	}, [params, router]);

	return (
		<Fragment>
			<ExpendableInput />
			<MainReportDisplayDate isGlobal={isGlobal} />
			<DayInput isGLobal={isGlobal} />
			<WeekInput isGLobal={isGlobal} />
			<MonthInput isGLobal={isGlobal} />
		</Fragment>
	);
}
