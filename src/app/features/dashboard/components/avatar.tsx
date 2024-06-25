'use client';

import { getInitials } from '@/app/lib/utils/naming/naming';
import clsx from 'clsx';

export function ProfileAvatar({ email, name }: { name: string | ''; email: string | '' }) {
	return (
		<div className='profile-avatar centering-flex gap-x-4 w-full '>
			<div className='avatar placeholder'>
				<div className='bg-neutral text-neutral-content rounded-full w-[2.5em]'>
					<span>{getInitials(name || 'User Name')}</span>
				</div>
			</div>
			<div className='flex flex-col'>
				<p className='text-xs'>{name}</p>
				<p className='text-xs text-neutral-text'>{email}</p>
			</div>
		</div>
	);
}

export function CompanyAvatar({
	numberOfAgents,
	teamName,
}: {
	teamName: string | 'Team Name';
	numberOfAgents: string | '';
}) {
	return (
		<div className='flex flex-col gap-y-2'>
			<div className='centering-flex gap-x-4'>
				<div className='avatar placeholder'>
					<div className='bg-neutral text-primary-text rounded-md w-[2.5em]'>
						<span>{getInitials(teamName)}</span>
					</div>
				</div>
				<div className='flex flex-col gap-y-0'>
					<p className='text-xs'>{teamName}</p>
					<p className='text-xs text-neutral-text'>{numberOfAgents} agents</p>
				</div>
			</div>
		</div>
	);
}

export function MemberListAvatar({ name }: { name: string }) {
	return (
		<div className='avatar placeholder' key={name}>
			<div className='bg-neutral text-neutral-content rounded-full w-[2.5em] border-primary-content outline-none'>
				<span>{getInitials(name || 'User Name')}</span>
			</div>
		</div>
	);
}

export function AgentDetailsAvatar({
	name,
	role,
	email,
}: {
	name: string;
	role: string;
	email: string;
}) {
	return (
		<div className='centering-flex gap-x-2 w-full'>
			<div className='avatar placeholder'>
				<div className='bg-neutral text-neutral-content rounded-full w-[4em] border-primary-content outline-none'>
					<span>{getInitials(name || 'User Name')}</span>
				</div>
			</div>
			<div className='flex flex-col gap-y-1'>
				<div
					className={clsx('badge border-none w-fit px-[.25em] py-[.5em] text-xs', {
						'bg-neutral text-primary-text': role === 'Agent',
						'bg-primary text-base-100': role === 'Admin',
					})}
				>
					{role}
				</div>
				<p className='text-xs'>{name || 'Username'}</p>
				<p className='text-xs text-neutral-text'>{email}</p>
			</div>
		</div>
	);
}

export function TeamDetailsAvatar({
	teamName,
	numberOfAgents,
}: {
	teamName: string;
	numberOfAgents: number;
}) {
	return (
		<div className='centering-flex gap-x-2 w-full'>
			<div className='avatar placeholder'>
				<div className='bg-neutral text-neutral-content rounded-md w-[4em] border-primary-content outline-none'>
					<span>{getInitials(teamName || 'User Name')}</span>
				</div>
			</div>
			<div className='flex flex-col gap-y-1'>
				<p className='text-xs'>{teamName || 'Username'}</p>
				<p className='text-xs text-neutral-text'>{numberOfAgents || 0} agents</p>
			</div>
		</div>
	);
}
