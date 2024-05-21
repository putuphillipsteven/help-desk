interface AlertProps {
	msg: string;
}

export default function Alert({ msg }: AlertProps) {
	return (
		<div className='w-full centering-flex justify-center bg-orange-dimata-2 p-6 gap-x-4'>
			<p className='text-lg font-medium'>{msg}</p>
			<button className='btn btn-sm bg-light-gray-dimata1 border-transparent text-black-dimata hover:bg-transparent'>
				Read Setup Instruction
			</button>
		</div>
	);
}
