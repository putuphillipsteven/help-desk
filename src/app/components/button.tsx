'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { FiPlusCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface CreateButtonProps {
	label: string;
	variant: 'filled' | 'outline';
	href: string;
}

interface AddButtonProps {
	label: string;
	href?: string;
}

import { FaArrowLeft } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
export function CreateButton({ label, variant, href }: CreateButtonProps) {
	return (
		<Link href={href}>
			<button
				className={clsx('btn btn-sm centering-flex justify-between', {
					'bg-blue-dimata border-transparent text-white hover:bg-white hover:text-blue-dimata hover:border-blue-dimata':
						variant === 'filled',
					'bg-white border-blue-dimata text-blue-dimata hover:bg-blue-dimata hover:text-white hover:border-transparent':
						variant === 'outline',
				})}
			>
				<FiPlusCircle className='text-lg' />
				{label}
			</button>
		</Link>
	);
}

export function AddButton({ label }: AddButtonProps) {
	return (
		<button className='btn border-none bg-transparent text-blue-dimata shadow-none hover:bg-transparent p-0'>
			<FaPlus />
			{label}
		</button>
	);
}

export function BackButton() {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};
	return (
		<button
			className='btn btn-sm bg-transparent border-none shadow-none text-blue-dimata-2 hover:bg-transparent'
			onClick={handleBack}
		>
			<FaArrowLeft className='text-lg' />
			Back
		</button>
	);
}
