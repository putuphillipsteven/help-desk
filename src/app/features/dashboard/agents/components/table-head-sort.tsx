'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import clsx from 'clsx';
import { handleSort } from '../utils/handleSort';
import { Fragment } from 'react';

interface TableHeadSort {
	uses: 'agent' | 'team';
}

export default function TableHeadSort({ uses }: TableHeadSort) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);
	const nameSort = params.get('na') || '';
	const roleSort = params.get('ro') || '';
	const { replace } = useRouter();

	return (
		<tr className=''>
			<th className='lg:w-fit px-4 lg:pl-36'>
				<div
					className='centering-flex gap-x-4 cursor-pointer'
					onClick={() => handleSort('name', nameSort, roleSort, replace, searchParams, pathname)}
				>
					<p className='font-medium'>Name</p>
					{nameSort === 'desc' ? (
						<LiaSortAlphaUpSolid
							className={clsx('text-2xl', {
								'text-black': nameSort !== 'desc',
								'text-primary': nameSort === 'desc',
							})}
						/>
					) : (
						<LiaSortAlphaDownSolid
							className={clsx('text-2xl', {
								'text-black': nameSort !== 'asc',
								'text-primary': nameSort === 'asc',
							})}
						/>
					)}
				</div>
			</th>
			<th className='lg:w-fit'>
				<div
					className='centering-flex gap-x-4 cursor-pointer'
					onClick={() => {
						uses === 'agent' &&
							handleSort('role', nameSort, roleSort, replace, searchParams, pathname);
					}}
				>
					<p className='font-medium'>{uses === 'agent' ? 'Role' : 'Agent'}</p>
					{roleSort === 'desc' ? (
						<LiaSortAlphaUpSolid
							className={clsx('text-2xl', {
								hidden: uses === 'team',
								'text-black': roleSort !== 'desc',
								'text-primary': roleSort === 'desc',
							})}
						/>
					) : (
						<LiaSortAlphaDownSolid
							className={clsx('text-2xl', {
								hidden: uses === 'team',
								'text-black': roleSort !== 'asc',
								'text-primary': roleSort === 'asc',
							})}
						/>
					)}
				</div>
			</th>
			<th className='lg:w-[50%] px-4'>
				<div className='centering-flex gap-x-2'>
					<p className='text-blue-dimata-2'></p>
				</div>
			</th>
		</tr>
	);
}
