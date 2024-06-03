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
		<div className='h-screen w-screen flex flex-col md:flex-row md:justify-between  bg-base-100 gap-x-[2em] p-[2em] gap-y-[0.5em]'>
			<div className='hidden md:flex md:flex-1 lg:w-[37em] h-full rounded-lg overflow-hidden relative'>
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
			<div className='right-container centering-flex-col flex-1 h-full justify-center'>
				<div className='w-full h-[37em] centering-flex-col justify-center gap-y-6 lg:w-[70%] md:px-8'>
					<div className='centering-flex-col gap-y-6 w-full h-fit'>
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
					</div>
					<div className='w-full h-full flex-1 centering-flex-col '>
						<div className='w-full h-full'>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
