import { useForm } from 'react-hook-form';
import { CreateTicketSchema, TicketFormData } from '../utils/ticketSchema';
import TicketFormFields from './form-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddButton } from '@/app/components/button';
import CustomQuill from '@/app/components/custom-quill';
export default function CreateTicketForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<TicketFormData>({ resolver: zodResolver(CreateTicketSchema) });
	const onSubmit = async (data: TicketFormData) => {
		console.log('SUCCESS', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-full centering-flex-col gap-y-4'>
			<TicketFormFields
				type='text'
				placeholder='Enter subject...'
				name='subject'
				register={register}
				error={errors.subject}
			/>
			<label className='form-control w-full'>
				<div className='label'>
					<span className='label-text cursor-pointer text-black-dimata'>Requester</span>
				</div>
				<div className='w-full centering-flex gap-x-2'>
					<TicketFormFields
						type='text'
						placeholder='Enter name...'
						name='name'
						register={register}
						error={errors.name}
					/>
					<TicketFormFields
						type='text'
						placeholder='Enter email...'
						name='email'
						register={register}
						error={errors.email}
					/>
				</div>
			</label>
			<label className='form-control w-full'>
				<div className='label'>
					<span className='label-text cursor-pointer text-black-dimata'>Team</span>
				</div>
				<select
					defaultValue={'All Team(default team)'}
					className='select select-bordered  text-black-dimata bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
					{...register('team')}
				>
					<option>All Team(default team)</option>
					<option>Star Wars</option>
					<option>Harry Potter</option>
				</select>
				{errors.team && (
					<span className='error-message place-self-start p-2'>
						<p className='text-red-500 text-xs'>{errors.team.message}</p>
					</span>
				)}
			</label>
			<label className='form-control w-full'>
				<div className='label'>
					<span className='label-text cursor-pointer text-black-dimata'>Agent</span>
				</div>
				<select
					defaultValue={'Unassigned'}
					className='select select-bordered  text-black-dimata bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
				>
					<option>
						<p>Unassigned</p>
					</option>
					<option>Star Wars</option>
					<option>Harry Potter</option>
				</select>
			</label>
			<label className='form-control w-full'>
				<div className='label'>
					<span className='label-text cursor-pointer text-black-dimata'>Status</span>
				</div>
				<select
					defaultValue={'Pending'}
					className='select select-bordered  text-black-dimata bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
				>
					<option>Pending</option>
					<option>Star Wars</option>
					<option>Harry Potter</option>
				</select>
				<div className='place-self-start'>
					<AddButton label='Add Tag' />
				</div>
			</label>
			<CustomQuill />
			<button
				type='submit'
				className='btn btn-md place-self-end  bg-blue-dimata-2 border-transparent text-white hover:text-black-dimata hover:border-2 hover:border-blue-dimata-2 hover:bg-transparent'
			>
				Submit
			</button>
		</form>
	);
}
