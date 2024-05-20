import clsx from 'clsx';
import { ReactElement } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

interface CreateButtonProps {
	label: string;
	variant: 'filled' | 'outline';
}
export default function CreateButton({ label, variant }: CreateButtonProps) {
	return (
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
	);
}
