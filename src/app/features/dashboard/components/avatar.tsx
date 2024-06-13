'use client';

import { getInitials } from '@/app/lib/utils/naming/naming';
import { Component } from 'react';

// ProfileAvatar Component
interface ProfileAvatarProps {
	avatarType: 'profile' | 'company';
	name?: string;
	companyName?: string;
	agents?: number;
	email?: string;
}

interface ProfileAvatarState {}

export default class ProfileAvatar extends Component<ProfileAvatarProps, ProfileAvatarState> {
	constructor(props: ProfileAvatarProps) {
		super(props);
		this.state = {};
	}

	renderProfileAvatar() {
		return (
			<div className='profile-avatar centering-flex gap-x-4 w-full '>
				<div className='avatar placeholder'>
					<div className='bg-neutral text-neutral-content rounded-full w-10'>
						<span>{getInitials(this.props.name || 'User Name')}</span>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='text-xs'>{this.props.name}</p>
					<p className='text-xs text-neutral-text'>{this.props.email}</p>
				</div>
			</div>
		);
	}

	renderCompanyAvatar() {
		return (
			<div className='flex flex-col gap-y-2 py-2'>
				<div className='centering-flex gap-x-2'>
					<div className='avatar placeholder'>
						<div className='bg-neutral text-primary-text rounded-md w-8'>
							<span>{getInitials(this.props.companyName || 'Team')}</span>
						</div>
					</div>
					<div className='flex flex-col gap-y-1'>
						<p className='text-xs'>{this.props.companyName}</p>
						<p className='text-xs text-neutral-text'>{this.props.agents} agents</p>
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { avatarType } = this.props;

		return (
			<div className='avatar-container'>
				{avatarType === 'profile' ? this.renderProfileAvatar() : this.renderCompanyAvatar()}
			</div>
		);
	}
}
