'use client';

import SideNavTickets from '@/app/features/dashboard/tickets/components/side-nav';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const handlePathname = (pathname: string) => {
		const isNotMainPage = /^\/dashboard\/tickets\/(create|edit)$/;

		return isNotMainPage.test(pathname);
	};
	return (
		<div className='max-w-full h-full flex'>
			{!handlePathname(pathname) && (
				<div className='w-[240px] h-auto overflow-hidden'>
					<SideNavTickets />
				</div>
			)}
			<div className='flex-1'>{children}</div>
		</div>
	);
}
