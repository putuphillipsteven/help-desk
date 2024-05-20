import React from 'react';

export default function ClearLayout({ children }: { children: React.ReactNode }) {
	return <div className='flex flex-col bg-white'>{children}</div>;
}
