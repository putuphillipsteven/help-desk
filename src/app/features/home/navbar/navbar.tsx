import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
	return (
		<div className='navbar bg-transparent flex justify-between h-fit px-24 py-6 z-20'>
			<a className='centering-flex hover:cursor-pointer gap-x-2'>
				<Image src='dimata-logo.svg' alt='Dimata Logo' width={32} height={32} />
				<p className='font-bold'>Dimata Help Desk</p>
			</a>
			<div className='centering-flex'>
				<ul className='centering-flex gap-x-8 px-1 font-medium mr-16 text-white'>
					<li className=''>
						<Link href={'#'} className=''>
							Home
						</Link>
					</li>
					<li>
						<Link href={'#'} className=''>
							Fitur
						</Link>
					</li>
					<li>
						<Link href={'#'} className=''>
							Solusi
						</Link>
					</li>
					<li>
						<Link href={'#'} className=''>
							Harga
						</Link>
					</li>
				</ul>
				<button className='btn btn-lg btn-ghost bg-base-100 hover:bg-gray-200 text-primary-text text-md uppercase rounded-4xl px-10'>
					<Link href={'/signin'}>Login</Link>
				</button>
			</div>
		</div>
	);
}
