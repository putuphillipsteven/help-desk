import SideNav from '../ui/dashboard/components/sidenav/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-screen min-h-screen gap-x-0'>
			<div className='flex-none md:w-[238px]'>
				<SideNav />
			</div>
			<div className='w-full md:overflow-y-auto bg-light-gray-dimata'>{children}</div>
		</div>
	);
}
