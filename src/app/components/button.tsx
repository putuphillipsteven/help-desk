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
					'bg-primary border-transparent text-base-100 hover:bg-base-100 hover:text-primary hover:border-primary':
						variant === 'filled',
					'bg-base-100 border-primary text-primary hover:bg-primary hover:text-base-100 hover:border-transparent':
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
