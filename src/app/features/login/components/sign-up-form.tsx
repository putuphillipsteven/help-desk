'use client';

import { useForm } from 'react-hook-form';
import TextInput from './sign-up-text-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpData, SignUpSchema } from '../utils/signUpSchema';
import { PasswordInput } from '@/app/components/password-input';

export default function SignUpForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>({ resolver: zodResolver(SignUpSchema) });

	const onSubmit = async (data: SignUpData) => {
		console.log('SUCCESS', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col justify-between'>
			{/* <TextInput
				type='text'
				placeholder='Enter First Name...'
				name='firstname'
				label='First Name'
				register={register}
				error={errors.firstname}
			/>
			<TextInput
				type='text'
				placeholder='Enter Last Name...'
				name='lastname'
				label='Last Name'
				register={register}
				error={errors.lastname}
			/> */}
			<TextInput
				type='text'
				placeholder='Enter Email...'
				name='email'
				register={register}
				error={errors.email}
			/>
			<PasswordInput
				placeholder='Enter Password...'
				name='password'
				register={register}
				error={errors.password}
			/>
			<PasswordInput
				placeholder='Enter Password...'
				name='confirmPassword'
				register={register}
				error={errors.confirmPassword}
			/>
			<button
				type='submit'
				className='btn btn-md btn-block self-end mt-auto bg-primary border-transparent text-base-100 hover:text-info-text hover:border hover:border-primary hover:bg-transparent'
			>
				Sign Up
			</button>
		</form>
	);
}
