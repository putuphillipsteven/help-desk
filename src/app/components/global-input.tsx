'use client';

import capitalize from 'capitalize';
import { FieldError, UseFormRegister } from 'react-hook-form';
import Link from 'next/link';

export type GlobalInputProps = {
	type: string;
	label: string;
	placeholder: string;
	name: string;
	register: UseFormRegister<any>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export default function GlobalInput({
	type,
	label,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}: GlobalInputProps) {
	return (
		<label className='form-control w-full flex flex-col gap-y-1'>
			<div className='label p-0'>
				<span className='label-text cursor-pointer text-primary-text'>{capitalize(label)}</span>
			</div>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, { valueAsNumber })}
				className={
					'input input-bordered text-primary-text bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
				}
				autoComplete='off'
			/>
			{error ? (
				<span className='error-message place-self-start'>
					<p className='text-error text-xs'>{error.message}</p>
				</span>
			) : (
				<span className='place-self-start hidden'>
					<p className='text-error text-xs'>NULL</p>
				</span>
			)}
		</label>
	);
}
