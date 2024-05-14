import Image from 'next/image';

export default function NavBar() {
	return (
		<div className='navbar bg-transparent flex justify-between h-fit px-24 py-6 z-20'>
			<a className='centering-flex hover:cursor-pointer gap-x-2'>
				<Image src='dimata-logo.svg' alt='Dimata Logo' width={32} height={32} />
				<p className='font-bold'>Dimata Help Desk</p>
			</a>
			<div className='centering-flex'>
				<ul className='centering-flex gap-x-8 px-1 font-medium text-white mr-16'>
					<li>
						<a className=''>Home</a>
					</li>
					<li>
						<a className=''>Fitur</a>
					</li>
					<li>
						<a className=''>Solusi</a>
					</li>
					<li>
						<a className=''>Harga</a>
					</li>
				</ul>
				<button className='btn btn-lg btn-ghost bg-light-gray-dimata1 hover:bg-gray-200 text-black-dimata text-md uppercase rounded-4xl px-10'>
					Login
				</button>
			</div>
		</div>
	);
}
