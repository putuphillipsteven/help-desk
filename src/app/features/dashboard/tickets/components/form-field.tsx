import { Fragment } from 'react';
import { TicketFormFieldProps } from '../utils/ticketSchema';
import capitalize from 'capitalize';
import clsx from 'clsx';
export default function TicketFormFields({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}: TicketFormFieldProps) {
	return (
		<Fragment>
			<label className='form-control w-full'>
				<div className='label'>
					<span className='label-text cursor-pointer text-black-dimata'>{capitalize(name)}</span>
				</div>
				<input
					type={type}
					placeholder={placeholder}
					{...register(name, { valueAsNumber })}
					className={
						'input input-bordered text-black-dimata bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
					}
				/>
				{error ? (
					<span className='error-message place-self-start p-2'>
						<p className='text-red-500 text-xs'>{error.message}</p>
					</span>
				) : (
					<span className='place-self-start p-2 opacity-0'>
						<p className='text-red-500 text-xs'>'TEST'</p>
					</span>
				)}
			</label>
		</Fragment>
	);
}
