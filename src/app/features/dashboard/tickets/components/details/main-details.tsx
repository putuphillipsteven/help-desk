'use client';

import RightSideNavDetails from './right-side-nav-details';
import CustomQuill from '@/app/components/custom-quill';
import { BackButton } from '@/app/components/button';
import { LuArchive } from 'react-icons/lu';
import { RiSpam2Line } from 'react-icons/ri';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { getTicketsById } from '../../hooks/useTickets';
import { useForm } from 'react-hook-form';
import { ReplyFormData, ReplyFormSchema } from '../../utils/replySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { tickets } from '../../data/tickets';

interface DetailsMainProps {
	id: string;
}

export default async function MainDetails({ id }: DetailsMainProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// setError,
		trigger,
		setValue,
		getValues,
	} = useForm<ReplyFormData>({ resolver: zodResolver(ReplyFormSchema) });

	const ticket = await getTicketsById(id, tickets);

	const onSubmit = async (data: ReplyFormData) => {
		console.log('SUCCESS', data);
	};

	return (
		<div className='w-full h-fit flex flex-col lg:flex-row lg:h-full gap-x-0 bg-base-100 no-scrollbar'>
			<div className='w-full h-full grid grid-rows-[3em_3em_fit_auto] grid-cols-1 lg:flex-1  lg:grid-rows-[3em_3em_1fr] border-neutral'>
				<div className='w-full h-fit lg:h-full centering-flex justify-between items-start py-2 px-4 border-b border-r border-neutral lg:justify-normal lg:gap-x-2'>
					<BackButton />
					<p className='font-medium'>{ticket?.subject}</p>
				</div>
				<div className='w-full h-fit lg:hidden'>
					<RightSideNavDetails
						agent={ticket?.agent}
						createdAt={ticket?.createdAt}
						details={ticket?.details}
						id={ticket?.id}
						priority={ticket?.priority}
						status={ticket?.status}
						subject={ticket?.subject}
						team={ticket?.team}
						user={ticket?.user}
					/>
				</div>
				<div className='w-full h-full centering-flex justify-between gap-x-2 py-2 px-4 border-b border-r border-neutral'>
					<div className='centering-flex gap-x-8'>
						<LuArchive className='text-primary-text text-2xl' />
						<RiSpam2Line className='text-primary-text text-2xl' />
						<HiOutlineTrash className='text-primary-text text-2xl' />
					</div>
					<div className='centering-flex gap-x-6'>
						<RiArrowLeftSLine className='text-primary-text text-2xl' />
						<RiArrowRightSLine className='text-primary-text text-2xl' />
					</div>
				</div>
				<div className='w-full h-full centering-flex-col p-4 gap-y-8 py-8 border-r border-neutral lg:px-40'>
					<div className='w-full flex flex-col gap-x-2 border border-neutral drop-shadow-sm rounded-md overflow-hidden'>
						<div className='p-2 bg-primary-content centering-flex justify-between'>
							<p className='text-lg font-bold'>{ticket?.agent}</p>
							<p className='text-sm font-medium'>{ticket?.createdAt}</p>
						</div>
						<div className='p-2'>
							<p className='text-sm'>{ticket?.details}</p>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='w-full h-fit  centering-flex-col'>
						<CustomQuill
							error={errors?.textArea}
							getValue={getValues}
							name='textArea'
							register={register}
							setValue={setValue}
							trigger={trigger}
						/>
						<button
							type='submit'
							className='btn btn-md place-self-end  bg-primary border-transparent text-base-100 hover:text-info-text hover:border hover:border-primary hover:bg-transparent'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className='w-full h-full hidden lg:flex lg:w-[240px]'>
				<RightSideNavDetails
					agent={ticket?.agent}
					createdAt={ticket?.createdAt}
					details={ticket?.details}
					id={ticket?.id}
					priority={ticket?.priority}
					status={ticket?.status}
					subject={ticket?.subject}
					team={ticket?.team}
					user={ticket?.user}
				/>
			</div>
		</div>
	);
}
