'use client';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInData, SignInSchema } from '../utils/signInSchema';
import { PasswordInput } from '@/app/components/password-input';
import GlobalInput from '@/app/components/global-input';
import { Auth } from '../../auth/data/auth';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SignInData>({ resolver: zodResolver(SignInSchema) });

	const router = useRouter();
	const auth = new Auth();

	const onSubmit = async (data: SignInData) => {
		try {
			const user = await auth.pmoLogin(data);
			if (user) {
				reset();
			}
			toast.success(user.message, {
				duration: 3000,
				position: 'bottom-center',
			});
			router.push('/dashboard');
		} catch (err: any) {
			toast.error(err.message, {
				duration: 3000,
				position: 'bottom-center',
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col justify-between'>
			<GlobalInput
				label='Email'
				type='text'
				placeholder='Enter Email...'
				name='email'
				register={register}
				error={errors.email}
			/>
			<PasswordInput
				label='Password'
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
