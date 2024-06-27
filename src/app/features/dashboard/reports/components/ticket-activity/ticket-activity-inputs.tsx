import TADayInput from './t-a-day-input';
import { Fragment } from 'react';
import TAMonthInput from './t-a-month-input';
import TAWeekInput from './t-a-week-input';

export default function TicketActicityInputs() {
	return (
		<Fragment>
			<TADayInput />
			<TAWeekInput />
			<TAMonthInput />
		</Fragment>
	);
}
