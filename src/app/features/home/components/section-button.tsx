import clsx from 'clsx';

interface SectionButtonProps {
	colour: string;
	text: string;
}

export default function SectionButton({ colour, text }: SectionButtonProps) {
	return (
		<button
			className={clsx('w-fit px-4 py-2 rounded-box hover:cursor-default', {
				'bg-lighter-orange': colour === 'orange',
				'bg-light-purple': colour === 'purple',
				'bg-base-100': colour === 'gray',
			})}
		>
			<p
				className={clsx('text-sm font-bold', {
					'text-light-orange': colour === 'orange',
					'text-white': colour === 'purple',
					'text-primary-text': colour === 'gray',
				})}
			>
				{text}
			</p>
		</button>
	);
}
