'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function IdURL({ agentId, children }: { children: any; agentId: string }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const createPageURL = () => {
		const params = new URLSearchParams(searchParams);
		const nameSort = params.get('na');
		const roleSort = params.get('ro');
		if (nameSort) {
			params.set('na', nameSort);
		}
		if (roleSort) {
			params.set('ro', roleSort);
		}
		params.set('agId', agentId);
		replace(`${pathname}?${params.toString()}`);
	};

	// const href = `${replace(pathname)}?${params.toString()}`;
	return <div onClick={createPageURL}>{children}</div>;
}
