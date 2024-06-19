'use client';

import { useEffect, useState } from 'react';

interface User {
	email: string;
	name: string;
}

const Page: React.FC = () => {
	const [user, setUser] = useState<User | any>(null);

	useEffect(() => {
		// Fetch user data from local storage
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<main className='h-full flex flex-col justify-center items-center p-8 gap-y-8'>
			<div className='flex flex-col justify-center items-center gap-y-4'>
				<h2 className='text-2xl'>Good Morning, {user ? user?.data.username : 'User'}</h2>
			</div>
		</main>
	);
};

export default Page;
