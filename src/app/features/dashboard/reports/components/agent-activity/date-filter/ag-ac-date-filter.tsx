import { Fragment } from 'react';
import AGADisplayDate from './components/ag-a-display-date';
import AGADayInput from './components/ag-a-day-input';
import AGAWeekInput from './components/ag-a-week-input';
import AGAMonthInput from './components/ag-a-month-input';

export default function AgAcDateFilter() {
	return (
		<Fragment>
			<AGADisplayDate />
			<AGADayInput />
			<AGAWeekInput />
			<AGAMonthInput />
		</Fragment>
	);
}
