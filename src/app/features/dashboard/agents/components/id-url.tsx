'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function AgentIdURL({ agentId, children }: { children: any; agentId: string }) {
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

	return <div onClick={createPageURL}>{children}</div>;
}

export function TeamIdURL({ teamId, children }: { children: any; teamId: string }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const createPageURL = () => {
		const params = new URLSearchParams(searchParams);
		const nameSort = params.get('na');
		if (nameSort) {
			params.set('na', nameSort);
		}
		params.set('teId', teamId);
		replace(`${pathname}?${params.toString()}`);
	};

	return <div onClick={createPageURL}>{children}</div>;
}
