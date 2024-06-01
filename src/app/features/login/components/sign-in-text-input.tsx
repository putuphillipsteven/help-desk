import capitalize from 'capitalize';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { SignUpData } from '../utils/signUpSchema';
import { SignInData } from '../utils/signInSchema';
import Link from 'next/link';

type SignInValidInputNames = 'email' | 'password';

export type SignInInputProps = {
	type: string;
	placeholder: string;
	name: SignInValidInputNames;
	register: UseFormRegister<SignInData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export default function SignInTextInput({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}: SignInInputProps) {
	return (
		<label className='form-control w-full flex flex-col gap-y-1'>
			{name !== 'password' ? (
				<div className='label p-0'>
					<span className='label-text cursor-pointer text-primary-text'>{capitalize(name)}</span>
				</div>
			) : (
				<div className='centering-flex w-full justify-between'>
					<div className='label p-0'>
						<span className='label-text cursor-pointer text-primary-text'>{capitalize(name)}</span>
					</div>
					<Link className='label p-0 text-primary text-xs' href={'#'}>
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
