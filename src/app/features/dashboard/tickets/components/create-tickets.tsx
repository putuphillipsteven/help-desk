'use client';

import { BackButton } from '@/app/components/button';
import React, { useRef, useState } from 'react';

export default function CreateTicket() {
	return (
		<div className='w-full h-full bg-white shadow-inner centering-flex-col gap-y-4'>
			<div className='w-full border-b-2 p-2 flex flex-row border-light-gray-dimata3'>
				<BackButton />
				<p className='self-center ml-auto mr-auto'>Add New Ticket</p>
			</div>
			<div className='w-full p-2 flex flex-row'>
				<div className='opacity-0'>
					<BackButton />
				</div>
				<div className='w-full centering-flex-col gap-y-4'>
					<label className='form-control w-[708px]'>
						<div className='label'>
							<span className='label-text cursor-pointer text-black-dimata'>Subject</span>
						</div>
						<input
							type='text'
							placeholder='Subject...'
							className='input input-bordered text-black-dimata bg-transparent input-md w-full border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
						/>
					</label>

					<label className='form-control w-[708px]'>
						<div className='label'>
							<span className='label-text cursor-pointer text-black-dimata'>Requester</span>
						</div>
						<div className='flex gap-x-2'>
							<input
								type='text'
								placeholder='Name...'
								className='input input-bordered  text-black-dimata bg-transparent input-md w-[50%] border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
							/>
							<input
								type='text'
								placeholder='Email...'
								className='input input-bordered  text-black-dimata bg-transparent input-md w-[50%] border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'
							/>
						</div>
					</label>
					<label className='form-control w-[708px]'>
						<div className='label'>
							<span className='label-text cursor-pointer text-black-dimata'>Team</span>
						</div>
						<select className='select select-bordered  text-black-dimata bg-transparent input-md w-[708px] border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'>
							<option disabled selected>
								All Team(default team)
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
						</select>
					</label>
					<label className='form-control w-[708px]'>
						<div className='label'>
							<span className='label-text cursor-pointer text-black-dimata'>Agent</span>
						</div>
						<select className='select select-bordered  text-black-dimata bg-transparent input-md w-[708px] border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'>
							<option disabled selected>
								Unassigned
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
						</select>
					</label>
					<label className='form-control w-[708px]'>
						<div className='label'>
							<span className='label-text cursor-pointer text-black-dimata'>Status</span>
						</div>
						<select className='select select-bordered  text-black-dimata bg-transparent input-md w-[708px] border-[1.5px] border-light-gray-dimata2 focus:ring-0 focus:outline-0'>
							<option disabled selected>
								Pending
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	);
}