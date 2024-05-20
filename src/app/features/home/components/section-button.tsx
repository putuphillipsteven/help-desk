import clsx from 'clsx';

interface SectionButtonProps {
	colour: string;
	text: string;
}

export default function SectionButton({ colour, text }: SectionButtonProps) {
	return (
		<button
			className={clsx('w-fit px-4 py-2 rounded-box hover:cursor-default', {
				'bg-orange-dimata1': colour === 'orange',
				'bg-purple-dimata1': colour === 'purple',
				'bg-light-gray-dimata2': colour === 'gray',
			})}
		>
			<p
				className={clsx('text-sm font-bold', {
					'text-orange-dimata': colour === 'orange',
					'text-white': colour === 'purple',
					'text-black-dimata': colour === 'gray',
				})}
			>
				{text}
			</p>
		</button>
	);
}
