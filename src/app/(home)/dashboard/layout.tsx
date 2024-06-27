import Alert from '@/app/features/dashboard/sidenav/components/alert';
import SideNav from '@/app/features/dashboard/sidenav/sidenav';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-full max-h-screen bg-neutral gap-x-0 relative'>
			<SideNav />
			<div className='flex-1 h-screen bg-base-100 overflow-y-auto overflow-x-auto'>
				<Alert msg='Set up email forwarding to see new customer messages on your dashboard.' />
				<Suspense>
					<div id='dashboard-children' className='grid grid-rows-1 w-full h-full mt-[3em]'>
						{children}
					</div>
				</Suspense>
			</div>
		</div>
	);
}
