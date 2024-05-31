'use client';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col w-full min-h-screen overflow-hidden no-scrollbar'>
			<div className='w-full h-full flex flex-col lg:flex-row'>
				<div className='flex-1 flex flex-col h-full no-scrollbar'>{children}</div>
			</div>
		</div>
	);
}
