import { Fragment } from 'react';
import TEADisplayDate from './te-a-display-date';
import TEADayInput from './te-a-day-input';
import TEAWeekInput from './te-a-week-input';
import TEAMonthInput from './te-a-month-input';

export default function TEAInputs() {
	return (
		<Fragment>
			<TEADisplayDate />
			<TEADayInput />
			<TEAWeekInput />
			<TEAMonthInput />
		</Fragment>
	);
}
