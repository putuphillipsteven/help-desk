'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface AlertProps {
	msg: string;
}

export default function Alert({ msg }: AlertProps) {
	const [alertDisplay, setAlertDisplay] = useState(true);
	let dashboardChildren: HTMLElement | null;

	const toggleAlert = () => {
		setAlertDisplay(false);
		if (dashboardChildren) {
			dashboardChildren?.classList?.remove('mt-[3em]');
		}
	};

	useEffect(() => {
		if (typeof document !== 'undefined') {
			dashboardChildren = document.getElementById('dashboard-children');
		}
	});
	return (
		<div
			className={clsx(
				'w-screen bg-warning p-2 gap-x-4 gap-y-2 flex flex-col justify-center items-center md:flex-row fixed h-[3em]  z-20 shadow-md',
				{
					hidden: !alertDisplay,
				},
			)}
		>
			<p className='font-medium text-center'>{msg}</p>
			<div className='flex gap-x-2 items-center justify-center md:items-start'>
				<button className='btn btn-xs centering-flex bg-base-100 border-transparent text-primary-text hover:bg-transparent'>
					Read Setup Instruction
				</button>
				<button
					className='btn btn-link btn-xs centering-flex border-transparent'
					onClick={toggleAlert}
				>
					Remind Me Later
				</button>
			</div>
		</div>
	);
}
