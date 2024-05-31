import capitalize from 'capitalize';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { SignUpData } from '../utils/signUpSchema';

type SignUpValidInputNames = 'firstname' | 'lastname' | 'email' | 'password';

export type SignUpInputProps = {
	type: string;
	placeholder: string;
	name: SignUpValidInputNames;
	register: UseFormRegister<SignUpData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export default function TextInput({
	type,
	placeholder,
	name,
	register,
	error,
	valueAsNumber,
}: SignUpInputProps) {
	return (
		<label className='form-control w-full'>
			<div className='label'>
				<span className='label-text cursor-pointer text-primary-text'>{capitalize(name)}</span>
			</div>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name, { valueAsNumber })}
				className={
					'input input-bordered text-primary-text bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
				}
			/>
			{error ? (
				<span className='error-message place-self-start pt-2'>
					<p className='text-red-500 text-xs'>{error.message}</p>
				</span>
			) : (
				<span className='place-self-start pt-2 opacity-0'>
					<p className='text-red-500 text-xs'>NULL</p>
				</span>
			)}
		</label>
	);
}
