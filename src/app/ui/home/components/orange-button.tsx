interface OrangeButtonProps {
	text: string;
}

export default function OrangeButton({ text }: OrangeButtonProps) {
	return (
		<button className='w-fit px-4 py-2 bg-orange-dimata1 rounded-box hover:cursor-default'>
			<p className='text-orange-dimata uppercase text-sm font-bold'>{text}</p>
		</button>
	);
}
