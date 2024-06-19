import SideNav from '@/app/features/dashboard/sidenav/sidenav';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-screen max-h-screen bg-neutral gap-x-0'>
			<SideNav />
			<div className='flex-1 h-screen bg-base-100 overflow-y-auto overflow-x-auto'>
				<Suspense>
					<div className='grid grid-rows-1 w-full h-full'>{children}</div>
				</Suspense>
			</div>
		</div>
	);
}
