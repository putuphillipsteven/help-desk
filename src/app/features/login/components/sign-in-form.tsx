'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInData, SignInSchema } from '../utils/signInSchema';
import SignInTextInput from './sign-in-text-input';

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
		<form onSubmit={handleSubmit(onSubmit)} className='w-full centering-flex-col gap-y-2'>
			<SignInTextInput
				type='text'
				placeholder='Enter Email...'
				name='email'
				register={register}
				error={errors.email}
			/>
			<SignInTextInput
				type='text'
				placeholder='Enter Password...'
				name='password'
				register={register}
				error={errors.password}
			/>

			<button
				type='submit'
				className='btn btn-md w-full  bg-primary border-transparent text-base-100 hover:text-info-text hover:border hover:border-primary hover:bg-transparent'
			>
				Login
			</button>
		</form>
	);
}
