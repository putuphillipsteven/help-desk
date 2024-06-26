import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

interface TestimonyNavigationProps {
	onNext: () => void;
	onPrevious: () => void;
}

export default function TestimonyNavigation({ onNext, onPrevious }: TestimonyNavigationProps) {
	return (
		<div className='centering-flex gap-x-16'>
			<button
				className='btn btn-ghost rounded-4xl text-black-dimata bg-light-gray-dimata'
				onClick={onPrevious}
			>
				<FaArrowLeft className='text-purple-dimata' />
				Previous
			</button>
			<button
				className='btn btn-ghost rounded-4xl text-black-dimata bg-light-gray-dimata'
				onClick={onNext}
			>
				Next
				<FaArrowRight className='text-purple-dimata' />
			</button>
		</div>
	);
}
