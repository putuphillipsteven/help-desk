import { FaArrowUpLong } from 'react-icons/fa6';
import { FaCircle } from 'react-icons/fa';
export default function PrioritySymbol({ priority }: { priority?: string }) {
	switch (priority) {
		case 'Low':
			return <FaCircle className='text-[8px] text-black' />;
		case 'Medium':
			return <FaArrowUpLong className='text-xs text-red-500' />;
		case 'High':
			return (
				<div className='centering-flex-col relative'>
					<FaArrowUpLong className='text-xs text-red-500' />
					<FaArrowUpLong className='absolute top-1 text-xs text-red-500' />
				</div>
			);
		default:
			return <FaCircle className='text-[8px] text-neutral' />;
	}
}
