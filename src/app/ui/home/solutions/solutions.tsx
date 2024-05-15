import Accordion from '../../../../../public/solutions/components/accordion';
import { MainButton, SecondaryButton } from '../components/button';
import SectionButton from '../components/section-button';
import { IoMdArrowDropright } from 'react-icons/io';

export default function Solutions() {
	return (
		<div className='home-section py-32 flex flex-col gap-y-8'>
			<div className='centering-flex justify-between'>
				<div className='flex flex-col gap-y-2'>
					<SectionButton colour='orange' text='Solutions' />
					<h2 className='section-main-text'>
						About Customer <span className='font-bold'>Stories</span>
					</h2>
				</div>
				<div className='centering-flex gap-x-4'>
					<MainButton text='Chat With Us' />
					<SecondaryButton
						text='Watch Videos'
						icon={<IoMdArrowDropright className='text-purple-dimata text-xl' />}
					/>
				</div>
			</div>
			<div className='centering-flex justify-between gap-x-4'>
				<Accordion />
				<img src='solutions/main-image.svg' className='w-[480px]' />
			</div>
		</div>
	);
}
