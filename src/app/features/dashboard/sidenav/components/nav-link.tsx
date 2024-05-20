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
}

export default function NavLink({ label, icon, notification, destination }: NavLinkProps) {
	const pathname = usePathname();
	console.log(`pathname`, pathname);
	return (
		<div
			className={clsx('w-full centering-flex justify-between p-2 rounded-md hover:cursor-pointer', {
				'bg-light-blue-dimata': checkLink(destination || 'undefined', pathname),
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
							'text-blue-dimata': checkLink(destination || 'undefined', pathname),
						})}
					>
						{label || 'Label'}
					</p>
				</div>
				{notification && (
					<div className='bg-red-600 w-6 h-6  centering-flex justify-center rounded-badge'>
						<p className='text-xs text-white'>{notification || 0}</p>
					</div>
				)}
			</Link>
		</div>
	);
}
