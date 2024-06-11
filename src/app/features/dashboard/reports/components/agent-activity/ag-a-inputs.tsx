import { Fragment } from 'react';
import AGADisplayDate from './ag-a-display-date';
import AGADayInput from './ag-a-day-input';
import AGAWeekInput from './ag-a-week-input';
import AGAMonthInput from './ag-a-month-input';

export default function AGAInputs() {
	return (
		<Fragment>
			<AGADisplayDate />
			<AGADayInput />
			<AGAWeekInput />
			<AGAMonthInput />
		</Fragment>
	);
}
