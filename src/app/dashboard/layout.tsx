import SideNav from '../features/dashboard/sidenav/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-auto max-h-screen bg-neutral gap-x-0'>
			<SideNav />
			<div className='flex-1 max-h-screen bg-base-100 overflow-y-auto overflow-x-auto'>
				<div className='grid grid-rows-1'>{children}</div>
			</div>
		</div>
	);
}
