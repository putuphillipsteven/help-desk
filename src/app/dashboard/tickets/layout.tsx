'use client';

import Alert from '@/app/features/dashboard/sidenav/components/alert';
import SideNavTickets from '@/app/features/dashboard/tickets/components/side-nav';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const handlePathname = (pathname: string) => {
		const isNotMainPage = /^\/dashboard\/tickets\/(create|edit)$/;

		return isNotMainPage.test(pathname);
	};
	return (
		<div className='flex flex-col w-full h-full overflow-hidden overflow-y-auto no-scrollbar'>
			<Alert msg='Set up email forwarding to see new customer messages on your dashboard.' />
			<div className='w-full h-full flex'>
				{!handlePathname(pathname) && (
					<div className='w-[240px] h-full overflow-hidden'>
						<SideNavTickets />
					</div>
				)}
				<div className='flex-1 flex flex-col'>{children}</div>
			</div>
		</div>
	);
}
