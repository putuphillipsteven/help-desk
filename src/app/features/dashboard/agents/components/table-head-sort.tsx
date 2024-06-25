'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LiaSortAlphaDownSolid, LiaSortAlphaUpSolid } from 'react-icons/lia';
import { FaCaretDown } from 'react-icons/fa';
import clsx from 'clsx';
import { handleSort } from '../utils/handleSort';
import { Fragment } from 'react';
import { FaCaretUp } from 'react-icons/fa6';

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

	console.log(!!nameSort);
	return (
		<tr>
			<th className='px-4 w-[50%] lg:pl-[7.2em]'>
				<div
					className='centering-flex gap-x-1 cursor-pointer relative'
					onClick={() => handleSort('name', nameSort, roleSort, replace, searchParams, pathname)}
				>
					<p className='font-medium'>Name</p>
					<div className='centering-flex relative h-full'>
						<FaCaretDown
							className={clsx('absolute text-md lg:text-2xl -top-[50%] translate-y-[50%]', {
								'text-neutral': nameSort && nameSort === 'desc',
								'text-primary': nameSort && nameSort !== 'desc',
							})}
						/>
						<FaCaretUp
							className={clsx('text-md lg:text-2xl ml-[.65em] lg:ml-4 self-center', {
								'text-neutral': nameSort && nameSort === 'asc',
								'text-primary': nameSort && nameSort !== 'asc',
							})}
						/>
					</div>
				</div>
			</th>
			<th className='w-[1%] whitespace-nowrap'>
				<div
					className={'centering-flex gap-x-1 cursor-pointer'}
					onClick={() => {
						uses === 'agent' &&
							handleSort('role', nameSort, roleSort, replace, searchParams, pathname);
					}}
				>
					<p className='font-medium'>{uses === 'agent' ? 'Role' : 'Agent'}</p>
					{uses === 'agent' && (
						<div className='centering-flex relative h-full'>
							<FaCaretDown
								className={clsx('absolute text-md lg:text-2xl -top-[50%] translate-y-[50%]', {
									'text-neutral': roleSort && roleSort === 'desc',
									'text-primary': roleSort && roleSort !== 'desc',
								})}
							/>
							<FaCaretUp
								className={clsx('text-md lg:text-2xl ml-[.65em] lg:ml-4 self-center', {
									'text-neutral': roleSort && roleSort === 'asc',
									'text-primary': roleSort && roleSort !== 'asc',
								})}
							/>
						</div>
					)}
				</div>
			</th>
			<th className={'hidden xs:flex px-4'}></th>
		</tr>
	);
}
