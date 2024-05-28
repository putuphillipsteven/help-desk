'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface AlertProps {
	msg: string;
}

export default function Alert({ msg }: AlertProps) {
	const [alertDisplay, setAlertDisplay] = useState(true);

	const toggleAlert = () => {
		setAlertDisplay(false);
	};
	return (
		<div
			className={clsx(
				'w-full bg-warning p-4 gap-x-4 gap-y-2 flex flex-col justify-center items-center md:flex-row',
				{
					hidden: !alertDisplay,
				},
			)}
		>
			<p className='font-medium text-center'>{msg}</p>
			<div className='flex flex-col gap-y-1 items-center justify-center md:items-start'>
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
