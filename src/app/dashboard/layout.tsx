import SideNav from '../features/dashboard/sidenav/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex max-w-full bg-base-100 h-screen gap-x-0'>
			<div className='md:w-[240px] h-full shadow-2xl'>
				<SideNav />
			</div>
			<div className='w-full h-full bg-base-100'>{children}</div>
		</div>
	);
}
