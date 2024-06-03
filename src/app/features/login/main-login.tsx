'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxTriangleDown } from 'react-icons/rx';

interface MainLoginProps {
	children?: React.ReactNode;
}
export default function MainLogin({ children }: MainLoginProps) {
	const pathname = usePathname();

	return (
		<div className='min-h-screen max-w-screen-2xl flex flex-col lg:flex-row  bg-base-100 p-[2em] gap-x-[10em] gap-y-[0.5em]'>
			<div className='hidden lg:flex lg:flex-1 rounded-lg overflow-hidden relative bg-login-gradient'>
				<div className='absolute w-full h-full bg-login-gradient z-10'></div>
				<Image
					src={'/login/wave-image.jpeg'}
					width={676}
					height={817}
					alt='wave-image'
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
					}}
					priority={false}
				/>
				<div className='w-full h-full z-10 p-2 centering-flex-col justify-between'>
					<div className='centering-flex-col'>
						<p className='text-base-100'>Welcome to Dimata Help Desk</p>
						<p className='text-base-100'>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className='centering-flex-col'>
						<p className='text-base-100'>Lorem ipsum dolor sit amet.</p>
						<p className='text-base-100  text-xs text-center '>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sit.
						</p>
					</div>
				</div>
			</div>
			<div className='centering-flex-col lg:w-full flex-1 lg:px-[8em] justify-start lg:justify-center items-center gap-y-4'>
				<div className='w-full p-1 centering-flex-col justify-start gap-y-2 h-[35em]'>
					<Link className='centering-flex gap-x-4 w-fit overflow-hidden' href={'/dashboard'}>
						<div className='rounded-md bg-primary'>
							<RxTriangleDown className='text-base-100 text-3xl' />
						</div>
						<h3 className='font-bold text-primary-text'>Helpdesk</h3>
					</Link>
					<div className='w-full centering-flex bg-primary-content rounded-md'>
						<Link
							href={'signup'}
							className={clsx('centering-flex-col flex-1 p-2 rounded-md', {
								'bg-primary text-base-100': pathname === '/signup',
								'bg-transparent text-base-300': pathname !== '/signup',
							})}
						>
							Sign Up
						</Link>
						<Link
							href={'signin'}
							className={clsx('centering-flex-col flex-1 p-2 rounded-md', {
								'bg-primary text-base-100': pathname === '/signin',
								'bg-transparent text-base-300': pathname !== '/signin',
							})}
						>
							Sign In
						</Link>
					</div>
					<div className='w-full'>{children}</div>
				</div>
			</div>
		</div>
	);
}
