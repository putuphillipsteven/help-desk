'use client';

import { getInitials } from '@/app/lib/utils/naming/naming';

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
