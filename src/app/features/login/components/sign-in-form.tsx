'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInData, SignInSchema } from '../utils/signInSchema';
import SignInTextInput from './sign-in-text-input';
import { PasswordInput } from '@/app/components/password-input';

export default function SignInForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInData>({ resolver: zodResolver(SignInSchema) });

	const onSubmit = async (data: SignInData) => {
		console.log('SUCCESS', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col justify-between'>
			<SignInTextInput
				type='text'
				placeholder='Enter Email...'
				name='email'
				register={register}
				error={errors.email}
			/>
			<PasswordInput
				type='text'
				placeholder='Enter Password...'
				name='password'
				register={register}
				error={errors.password}
			/>
			<button
				type='submit'
				className='btn btn-md btn-block self-end mt-auto bg-primary border-transparent text-base-100 hover:text-info-text hover:border hover:border-primary hover:bg-transparent'
			>
				Login
			</button>
		</form>
	);
}