interface MainButtonProps {
	text: string;
	icon?: React.ReactElement;
}

export function MainButton({ text }: MainButtonProps) {
	return <button className={'btn btn-lg text-white text-sm rounded-4xl uppercase'}>{text}</button>;
}

export function SecondaryButton({ icon, text }: MainButtonProps) {
	return (
		<button className='btn btn-lg btn-ghost bg-light-gray-dimata text-black-dimata text-sm uppercase rounded-4xl centering-flex gap-x-2'>
			{text}
			{icon && (
				<div className='flex items-center justify-center bg-white w-6 h-6 rounded-badge'>
					{icon}
				</div>
			)}
		</button>
	);
}
