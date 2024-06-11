import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { logging } from '../logging/logging';
import { RefObject } from 'react';

// Function to format date as mm--dd--yyyy
export const formatDate = (date: Date): string => {
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');
	const yyyy = date.getFullYear();
	return `${yyyy}-${mm}-${dd}`;
};

export const formatDay = (dateString: string): { startDate: string; endDate: string } => {
	// Parse the date string
	const date = new Date(dateString);

	const newStartDate = new Date(date);
	newStartDate.setDate(date.getDate() - 1);

	// Add 1 days to the date
	const newDate = new Date(date);
	newDate.setDate(date.getDate() + 1);
	const endDate = formatDate(newDate);
	const startDate = formatDate(newStartDate);
	return {
		startDate,
		endDate,
	};
};

export const formatWeek = (dateString: string): { startDate: string; endDate: string } => {
	const date = new Date(dateString);

	const newStartDate = new Date(date);
	newStartDate.setDate(date.getDate() - 1);

	// Add 7 days to the date
	const newDate = new Date(date);
	newDate.setDate(date.getDate() + 7);
	const startDate = formatDate(newStartDate);
	const endDate = formatDate(newDate);
	return {
		startDate,
		endDate,
	};
};

export const formatMonth = (dateString: string): { startDate: string; endDate: string } => {
	const date = new Date(dateString);

	// Start date is the same as the input date
	const startDate = new Date(date);

	// End date is one month from the start date
	const endDate = new Date(date);
	endDate.setMonth(date.getMonth() + 1);

	return {
		startDate: formatDate(startDate),
		endDate: formatDate(endDate),
	};
};

export const formatToName = (dateString: string): string => {
	// Create a new Date object from the input string
	const dateObj = new Date(dateString);

	// Get the day of the month
	const day = dateObj.getUTCDate();

	// Array of month names
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// Get the month name
	const month = monthNames[dateObj.getUTCMonth()];

	// Format the date
	const formattedDate = `${day} ${month}`;

	return formattedDate;
};

export const getNextDayDate = (dateString1: string, dateString2: string): string | null => {
	// Create Date objects from the input strings
	const date1 = new Date(dateString1);
	const date2 = new Date(dateString2);

	// Calculate the difference in milliseconds
	const diffMilliseconds = Math.abs(date2.getTime() - date1.getTime());

	// Number of milliseconds in one day
	const twoDayMilliseconds = 48 * 60 * 60 * 1000;

	// Check if the difference is exactly one day
	if (diffMilliseconds === twoDayMilliseconds) {
		// Add one day to date1
		date1.setDate(date1.getDate() + 1);

		// Format the date as YYYY-MM-DD
		const year = date1.getUTCFullYear();
		const month = (date1.getUTCMonth() + 1).toString().padStart(2, '0'); // getUTCMonth is zero-based
		const day = date1.getUTCDate().toString().padStart(2, '0');

		// Construct the formatted date string
		return formatToName(`${year}-${month}-${day}`);
	} else {
		return `${formatToName(dateString1)} - ${formatToName(dateString2)}`; // Return null if the difference is not one day
	}
};

export const getDiffDays = (startDate: string, endDate: string): string => {
	const diffMilliseconds = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());
	const twoDayMilliseconds = 48 * 60 * 60 * 1000;
	const oneWeekMilliseconds = 192 * 60 * 60 * 1000;
	if (diffMilliseconds === twoDayMilliseconds) {
		return 'day';
	} else if (diffMilliseconds === oneWeekMilliseconds) {
		return 'week';
	} else {
		return 'month';
	}
};

export const handleUsageDay = (
	usage: string,
	params: URLSearchParams,
	router: AppRouterInstance,
	dayInputRef: RefObject<HTMLInputElement>,
) => {
	if (dayInputRef.current?.value) {
		if (usage === 'ticket') {
			params.set('tasd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('taed', formatDay(dayInputRef.current?.value.toString()).endDate);
			router.replace(`?${params.toString()}`);
		} else if (usage === 'team') {
			params.set('tesd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('teed', formatDay(dayInputRef.current?.value.toString()).endDate);
			router.replace(`?${params.toString()}`);
		} else if (usage === 'agent') {
			params.set('agsd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('aged', formatDay(dayInputRef.current?.value.toString()).endDate);
			router.replace(`?${params.toString()}`);
		} else {
			params.set('tasd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('taed', formatDay(dayInputRef.current?.value.toString()).endDate);
			params.set('agsd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('aged', formatDay(dayInputRef.current?.value.toString()).endDate);
			params.set('tesd', formatDay(dayInputRef.current?.value.toString()).startDate);
			params.set('teed', formatDay(dayInputRef.current?.value.toString()).endDate);
			router.replace(`?${params.toString()}`);
		}
	}
};
export const handleUsageMonth = (
	usage: string,
	params: URLSearchParams,
	router: AppRouterInstance,
	monthInputRef: RefObject<HTMLInputElement>,
) => {
	if (monthInputRef.current?.valueAsDate) {
		const startDate = formatMonth(monthInputRef.current.valueAsDate.toString()).startDate;
		const endDate = formatMonth(monthInputRef.current.valueAsDate.toString()).endDate;

		if (usage === 'ticket') {
			params.set('tasd', startDate);
			params.set('taed', endDate);
		} else if (usage === 'team') {
			params.set('tesd', startDate);
			params.set('teed', endDate);
		} else if (usage === 'agent') {
			params.set('agsd', startDate);
			params.set('aged', endDate);
		} else {
			params.set('tasd', startDate);
			params.set('taed', endDate);
			params.set('agsd', startDate);
			params.set('aged', endDate);
			params.set('tesd', startDate);
			params.set('teed', endDate);
		}
		router.replace(`?${params.toString()}`);
	}
};

export const handleUsageWeek = (
	usage: string,
	params: URLSearchParams,
	router: AppRouterInstance,
	weekInputRef: RefObject<HTMLInputElement>,
) => {
	if (weekInputRef.current?.valueAsDate) {
		logging('[weekInput]', weekInputRef.current.valueAsDate);
		const startDate = formatWeek(weekInputRef.current.valueAsDate.toString()).startDate;
		const endDate = formatWeek(weekInputRef.current.valueAsDate.toString()).endDate;

		if (usage === 'ticket') {
			params.set('tasd', startDate);
			params.set('taed', endDate);
		} else if (usage === 'team') {
			params.set('tesd', startDate);
			params.set('teed', endDate);
		} else if (usage === 'agent') {
			params.set('agsd', startDate);
			params.set('aged', endDate);
		} else {
			params.set('tasd', startDate);
			params.set('taed', endDate);
			params.set('agsd', startDate);
			params.set('aged', endDate);
			params.set('tesd', startDate);
			params.set('teed', endDate);
		}
		router.replace(`?${params.toString()}`);
	}
};
