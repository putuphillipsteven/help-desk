'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

export default function IdURL({ children, agId }: { children: ReactElement; agId: string }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const createPageURL = () => {
		const params = new URLSearchParams(searchParams);
		params.set('agid', agId);
		replace(`${pathname}?${params.toString()}`);
	};
	return (
		<div onClick={createPageURL} className='cursor-pointer'>
			{children}
		</div>
	);
}
