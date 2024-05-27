interface AlertProps {
	msg: string;
}

export default function Alert({ msg }: AlertProps) {
	return (
		<div className='w-full  justify-center bg-warning p-6 gap-x-4 hidden lg:flex lg:items-center'>
			<p className='text-lg font-medium'>{msg}</p>
			<button className='btn btn-sm bg-base-100 border-transparent text-primary-text hover:bg-transparent'>
				Read Setup Instruction
			</button>
		</div>
	);
}
