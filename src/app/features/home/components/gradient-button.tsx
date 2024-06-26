import clsx from 'clsx';
import { IoCheckmark } from 'react-icons/io5';
interface GradientButtonProps {
	text: string;
	colour: string;
}
export default function GradientButton({ text, colour }: GradientButtonProps) {
	return (
		<button
			className={clsx('w-fit px-4 py-2 rounded-box hover:cursor-default centering-flex gap-x-2', {
				'bg-green-gradient': colour === 'green',
				'bg-purple-gradient': colour === 'purple',
				'bg-purple-int-gradient': colour === 'purple-int',
				'bg-orange-gradient': colour === 'orange',
			})}
		>
			<div
				className={clsx('w-6 h-6 rounded-box flex items-center justify-center', {
					'bg-green': colour === 'green',
					'bg-purple': colour === 'purple',
					'bg-light-orange': colour === 'orange',
					'bg-white': colour === 'purple-int',
				})}
			>
				<IoCheckmark
					className={clsx('', {
						'text-white': colour !== 'purple-int',
						'text-purple': colour === 'purple-int',
					})}
				/>
			</div>
			<p
				className={clsx('uppercase text-sm font-bold', {
					'text-green': colour === 'green',
					'text-purple': colour === 'purple',
					'text-orange': colour === 'orange',
					'text-white': colour === 'purple-int',
				})}
			>
				{text}
			</p>
		</button>
	);
}
