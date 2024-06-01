import capitalize from 'capitalize';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { SignUpData } from '../utils/signUpSchema';
import Link from 'next/link';
import clsx from 'clsx';

type SignUpValidInputNames = 'firstname' | 'lastname' | 'email' | 'password';

export type SignUpInputProps = {
	type: string;
	placeholder: string;
	name: SignUpValidInputNames;
	register: UseFormRegister<SignUpData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
	label?: string;
	isSignUp?: boolean;
};

export default function TextInput({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
	label,
	isSignUp,
}: SignUpInputProps) {
	return (
		<label className='form-control w-full flex flex-col gap-y-1'>
			{name !== 'password' ? (
				<div className='label p-0'>
					<span className='label-text cursor-pointer text-primary-text'>
						{label ? label : capitalize(name)}
					</span>
				</div>
			) : (
				<div className={clsx('centering-flex w-full justify-between')}>
					<div className='label p-0'>
						<span className='label-text cursor-pointer text-primary-text'>{capitalize(name)}</span>
					</div>
					<Link
						className={clsx('label p-0 text-primary text-xs', {
							hidden: isSignUp,
						})}
						href={'#'}
					>
						Forgot Password?
					</Link>
				</div>
			)}
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, { valueAsNumber })}
				className={
					'input input-bordered text-primary-text bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
				}
			/>
			{error ? (
				<span className='error-message place-self-start'>
					<p className='text-error text-xs'>{error.message}</p>
				</span>
			) : (
				<span className='place-self-start opacity-0'>
					<p className='text-error text-xs'>NULL</p>
				</span>
			)}
		</label>
	);
}
