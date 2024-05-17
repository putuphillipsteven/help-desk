import Image from 'next/image';
import { Fragment } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
export default function Footer() {
	return (
		<Fragment>
			<footer className='footer p-10 text-base-content home-section centering-flex gap-x-28 items-start h-fit'>
				<div className='flex flex-col gap-y-8 w-[440px]'>
					<div className='card w-[440px] bg-light-gray-dimata4 text-primary-content p-4'>
						<div className='card-body flex flex-col gap-y-4'>
							<div className='centering-flex gap-x-2'>
								<Image src='dimata-logo.svg' alt='Dimata Logo' width={32} height={32} />
								<p className='font-bold'>Dimata Help Desk</p>
							</div>
							<p className='text-sm'>
								Jl. Imam Bonjol, Cipta Selaras no 12 Denpasar, Bali, Indonesia
							</p>
							<p className='text-sm'>ID: +62 361-448-4425</p>
							<p className='text-sm'>email: marketing@dimata.com</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-x-28 items-start w-full h-full'>
					<div className='flex gap-x-28'>
						<nav className='flex flex-col gap-y-4 text-black-dimata'>
							<h5 className='text-black-dimata font-bold'>Support</h5>
							<a className='link link-hover font-bold text-black-dimata2'>About</a>
							<a className='link link-hover font-bold text-black-dimata2'>Platform</a>
							<a className='link link-hover font-bold text-black-dimata2'>Resources</a>
							<a className='link link-hover font-bold text-black-dimata2'>Blog</a>
							<a className='link link-hover font-bold text-black-dimata2'>Pricing</a>
						</nav>
						<nav className='flex flex-col gap-y-4 text-black-dimata'>
							<h5 className='text-black-dimata font-bold'>Utility Pages</h5>
							<a className='link link-hover font-bold text-black-dimata2'>Style Guide</a>
							<a className='link link-hover font-bold text-black-dimata2'>Changelog</a>
							<a className='link link-hover font-bold text-black-dimata2'>Licenses</a>
							<a className='link link-hover font-bold text-black-dimata2'>Protected</a>
							<a className='link link-hover font-bold text-black-dimata2'>Not Found</a>
						</nav>
					</div>
				</div>
			</footer>
			<footer className='footer  px-10 py-4 text-base-content border-base-300 home-section flex justify-between'>
				<div className='w-[440px]'>
					<div className='divider m-0 opacity-0'></div>
					<div className='centering-flex gap-x-4 w-[440px]'>
						<p className='font-medium'>Follow Us :</p>
						<nav className=''>
							<div className='grid grid-flow-col gap-x-6'>
								<a>
									<FaInstagram className='text-xl hover:cursor-pointer hover:text-purple-dimata' />
								</a>
								<a>
									<FaFacebook className='text-xl  hover:cursor-pointer hover:text-purple-dimata' />
								</a>
								<a>
									<FaTwitter className='text-xl  hover:cursor-pointer hover:text-purple-dimata' />
								</a>
								<a>
									<FaLinkedin className='text-xl  hover:cursor-pointer hover:text-purple-dimata' />
								</a>
								<a>
									<FaYoutube className='text-xl  hover:cursor-pointer hover:text-purple-dimata' />
								</a>
							</div>
						</nav>
					</div>
				</div>
				<div className='flex flex-col items-start w-full'>
					<div className='divider m-0'></div>
					<div className='flex w-full items-center justify-center gap-x-4'>
						<p className='text-sm'>Copyright © 2024 Dimata Sora Jayate</p>
						<div className='h-6 w-6 bg-black-dimata text-white p-4 centering-flex justify-center rounded-badge float-right'>
							<IoIosArrowForward className='text-white' />
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
}
