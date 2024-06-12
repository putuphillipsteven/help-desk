// MainTicketActivity.tsx
import React from 'react';
import TicketActicityInputs from './ticket-activity/ticket-activity-inputs';
import TADisplayDate from './ticket-activity/t-a-display-date';
import TAChart from './ticket-activity/t-a-chart';
import { ChartData, ChartOptions } from 'chart.js';

export default function MainTicketActivity() {
	const data: ChartData<'bar'> = {
		labels: ['Open', 'Pending', 'On Hold', 'Solved', 'Closed'],
		datasets: [
			{
				backgroundColor: [
					'#3B82F6', // Open
					'#EAB308', // Pending
					'#6B7280', // On Hold
					'#22C55E', // Solved
					'#EF4444', // Closed
				],
				borderColor: [
					'#3B82F6', // Open
					'#EAB308', // Pending
					'#6B7280', // On Hold
					'#22C55E', // Solved
					'#EF4444', // Closed
				],
				borderWidth: 0.5,
				data: [4, 10, 5, 4, 2],
			},
		],
	};

	const options: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					display: false, // Hide x-axis ticks
				},
			},
			y: {
				grid: {
					display: true,
				},
				ticks: {
					stepSize: 1, // Display labels every integer
					precision: 0, // Remove decimals from labels
				},
			},
		},
		plugins: {
			legend: {
				display: false, // Hide the legend
			},
			tooltip: {
				enabled: true, // Enable tooltips
			},
		},
	};

	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-reports w-full h-[3em] flex justify-between'>
				<div className='centering-flex px-2'>
					<p className='font-medium text-xl'>Ticket Activity</p>
				</div>
				<div className='centering-flex p-2 gap-x-2 w-fit'>
					<TADisplayDate />
					<TicketActicityInputs />
				</div>
			</div>
			<div className='body-ticket-activity flex-1 w-full px-2'>
				<TAChart data={data} options={options} />
			</div>
			<div className='centering-flex justify-between w-full px-16'>
				<div className='centering-flex gap-x-2'>
					<div className='w-6 h-6 rounded-full centering-flex-col justify-center bg-primary text-white text-xs'>
						4
					</div>
					<p className='text-sm'>Open</p>
				</div>
				<div className='centering-flex gap-x-2'>
					<div className='w-6 h-6 rounded-full centering-flex-col justify-center bg-info text-white text-xs'>
						4
					</div>
					<p className='text-sm'>Pending</p>
				</div>
				<div className='centering-flex gap-x-2'>
					<div className='w-6 h-6 rounded-full centering-flex-col justify-center bg-base-300 text-white text-xs'>
						4
					</div>
					<p className='text-sm'>On Hold</p>
				</div>
				<div className='centering-flex gap-x-2'>
					<div className='w-6 h-6 rounded-full centering-flex-col justify-center bg-success text-white text-xs'>
						4
					</div>
					<p className='text-sm'>Solved</p>
				</div>
				<div className='centering-flex gap-x-2'>
					<div className='w-6 h-6 rounded-full centering-flex-col justify-center bg-error text-white text-xs'>
						4
					</div>
					<p className='text-sm'>Closed</p>
				</div>
			</div>
		</div>
	);
}
