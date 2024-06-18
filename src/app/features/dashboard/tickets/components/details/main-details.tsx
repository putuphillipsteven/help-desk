'use client';

import { useState, useEffect } from 'react';
import RightSideNavDetails from './right-side-nav-details';
import CustomQuill from '@/app/components/custom-quill';
import { BackButton } from '@/app/components/button';
import { LuArchive } from 'react-icons/lu';
import { RiSpam2Line } from 'react-icons/ri';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { ReplyFormData, ReplyFormSchema } from '../../utils/replySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TicketProps, tickets } from '../../data/dummyTickets';
import { Ticket } from '../../data/ticket';
import { logging } from '@/app/lib/utils/logging/logging';
import MainDetailsSkeleton from './main-details-skeleton';

interface DetailsMainProps {
	id: string;
}

export default function MainDetails({ id }: DetailsMainProps) {
	const [ticketById, setTicketById] = useState<TicketProps | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		setValue,
		getValues,
	} = useForm<ReplyFormData>({ resolver: zodResolver(ReplyFormSchema) });

	useEffect(() => {
		const fetchTicket = async () => {
			try {
				const ticket = new Ticket();
				const fetchedTicket = await ticket.getTicketById(id, tickets);
				setTicketById(fetchedTicket);
			} catch (error) {
				console.error('Failed to fetch ticket', error);
				setTicketById(null);
			} finally {
				setLoading(false);
			}
		};
		fetchTicket();
	}, [id]);

	const onSubmit = async (data: ReplyFormData) => {
		console.log('SUCCESS', data);
	};

	if (loading) {
		return <MainDetailsSkeleton />;
	}

	return (
		<div className='w-full h-fit flex flex-col lg:flex-row lg:h-full gap-x-0 bg-base-100 no-scrollbar'>
			<div className='w-full h-full grid grid-rows-[3em_3em_fit_auto] grid-cols-1 lg:flex-1 lg:grid-rows-[3em_3em_1fr] border-neutral'>
				<div className='w-full h-fit lg:h-full centering-flex justify-between items-start py-2 px-4 border-b border-r border-neutral lg:justify-normal lg:gap-x-2'>
					<BackButton />
					<p className='font-medium'>{ticketById?.subject}</p>
				</div>
				<div className='w-full h-fit lg:hidden'>
					<RightSideNavDetails
						agent={ticketById?.agent}
						createdAt={ticketById?.createdAt}
						details={ticketById?.details}
						id={ticketById?.id}
						priority={ticketById?.priority}
						status={ticketById?.status}
						subject={ticketById?.subject}
						team={ticketById?.team}
						user={ticketById?.user}
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
							<p className='text-lg font-bold'>{ticketById?.agent}</p>
							<p className='text-sm font-medium'>{ticketById?.createdAt}</p>
						</div>
						<div className='p-2'>
							<p className='text-sm'>{ticketById?.details}</p>
						</div>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='w-full h-fit centering-flex-col'>
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
							className='btn btn-md place-self-end bg-primary border-transparent text-base-100 hover:text-info-text hover:border hover:border-primary hover:bg-transparent'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className='w-full h-full hidden lg:flex lg:w-[240px]'>
				<RightSideNavDetails
					agent={ticketById?.agent}
					createdAt={ticketById?.createdAt}
					details={ticketById?.details}
					id={ticketById?.id}
					priority={ticketById?.priority}
					status={ticketById?.status}
					subject={ticketById?.subject}
					team={ticketById?.team}
					user={ticketById?.user}
				/>
			</div>
		</div>
	);
}
