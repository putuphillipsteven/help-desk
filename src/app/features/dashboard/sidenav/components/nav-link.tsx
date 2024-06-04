'use client';

import { checkLink } from '@/app/lib/utils/routing/routing';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import { FaCircle } from 'react-icons/fa';
interface NavLinkProps {
	label?: string;
	icon?: ReactElement;
	notification?: number;
	destination?: string;
	sideNavDisplay: boolean;
}

export default function NavLink({
	label,
	icon,
	notification,
	destination,
	sideNavDisplay,
}: NavLinkProps) {
	const pathname = usePathname();
	return (
		<div
			className={clsx('w-full centering-flex justify-between p-2 rounded-md hover:cursor-pointer', {
				'bg-primary-content': checkLink(destination || 'undefined', pathname),
			})}
		>
			<Link
				className='w-full centering-flex justify-between'
				href={destination ? `/dashboard/${destination}` : `/dashboard`}
			>
				<div className='centering-flex gap-x-4'>
					{(icon && icon) || <FaCircle className='text-2xl' />}
					<p
						className={clsx('text-lg font-medium', {
							'text-info-text': checkLink(destination || 'undefined', pathname),
							hidden: !sideNavDisplay,
						})}
					>
						{label || 'Label'}
					</p>
				</div>
				{notification && sideNavDisplay && (
					<div className='bg-error w-6 h-6 centering-flex justify-center rounded-badge'>
						<p className='text-xs text-base-100'>{notification || 0}</p>
					</div>
				)}
			</Link>
		</div>
	);
}
