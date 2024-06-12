import { Fragment } from 'react';
import TEADisplayDate from './components/te-a-display-date';
import TEADayInput from './components/te-a-day-input';
import TEAWeekInput from './components/te-a-week-input';
import TEAMonthInput from './components/te-a-month-input';

export default function TEADateFilter() {
	return (
		<Fragment>
			<TEADisplayDate />
			<TEADayInput />
			<TEAWeekInput />
			<TEAMonthInput />
		</Fragment>
	);
}
