import { IoAdd } from 'react-icons/io5';

export default function AddNewAgentButton() {
	return (
		<button className='button-md centering-flex gap-x-6 bg-transparent border-none hover:bg-transparent'>
			<div className=' w-10 h-10 centering-flex justify-center  bg-blue-dimata-2 rounded-full'>
				<IoAdd className='text-2xl text-white' />
			</div>
			<p className='text-sm'>Add New Agent</p>
		</button>
	);
}
export function CreateNewTeamButton() {
	return (
		<button className='button-md centering-flex gap-x-6 bg-transparent border-none hover:bg-transparent'>
			<div className=' w-10 h-10 centering-flex justify-center  bg-blue-dimata-2 rounded-full'>
				<IoAdd className='text-2xl text-white' />
			</div>
			<p className='text-sm'>Create New Team</p>
		</button>
	);
}
