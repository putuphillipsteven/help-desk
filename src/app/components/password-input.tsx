'use client';

import { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { BiHide, BiShow } from 'react-icons/bi';

export type PasswordInputProps = {
	placeholder: string;
	name: string;
	register: UseFormRegister<any>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export const PasswordInput = ({
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}: PasswordInputProps) => {
	const [passwordVisible, setPasswordVisible] = useState(true);

	const togglePasswordVisibility = () => {
		const input = document.getElementById(name) as HTMLInputElement;
		if (input.type === 'password') {
			setPasswordVisible(false);
			console.log(input.type);
			console.log(passwordVisible);
		} else {
			setPasswordVisible(true);
			console.log(input.type);
			console.log(passwordVisible);
		}
	};
	return (
		<div className='form-control flex flex-col gap-y-1'>
			<label htmlFor='password' className='text-primary-text label-text cursor-pointer'>
				Password
			</label>
			<div className='flex items-center gap-2 relative'>
				<input
					autoComplete='off'
					type={passwordVisible ? 'password' : 'text'}
					className='input input-bordered text-primary-text bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
					id={name}
					placeholder={placeholder}
					{...register(name, { valueAsNumber })}
				/>
				<div
					className='absolute right-0 mr-4 cursor-pointer text-primary-text'
					aria-controls={name}
					aria-expanded={passwordVisible}
					onClick={() => togglePasswordVisibility()}
				>
					{passwordVisible ? <BiShow /> : <BiHide />}
				</div>
			</div>
			{error ? (
				<span className='error-message place-self-start'>
					<p className='text-error text-xs'>{error.message}</p>
				</span>
			) : (
				<span className='place-self-start opacity-0'>
					<p className='text-error text-xs'>NULL</p>
				</span>
			)}
		</div>
	);
};
