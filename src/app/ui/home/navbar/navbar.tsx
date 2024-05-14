import Image from 'next/image';

export default function NavBar() {
	return (
		<div className='navbar bg-white flex justify-between h-fit px-24 py-6'>
			<a className='centering-flex hover:cursor-pointer'>
				<Image src='dimata-logo.svg' alt='Dimata Logo' width={32} height={32} />
				<p className='font-bold'>Dimata Help Desk</p>
			</a>
			<div className='centering-flex'>
				<ul className='menu menu-horizontal px-1 font-medium'>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Fitur</a>
					</li>
					<li>
						<a>Solusi</a>
					</li>
					<li>
						<a>Harga</a>
					</li>
				</ul>
				<button className='btn btn-lg btn-ghost text-sm text-black-dimata bg-white rounded-4xl uppercase'>
					Login
				</button>
			</div>
		</div>
	);
}
