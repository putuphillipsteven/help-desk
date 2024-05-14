import About from './ui/home/about/about';
import Jumbotron from './ui/home/jumbotron/jumbotron';
import NavBar from './ui/home/navbar/navbar';
import Trusted from './ui/home/trusted/trusted';

export default function Home() {
	return (
		<main className='centering-flex-col min-h-screen w-full bg-white left-0 z-0'>
			<img
				src={'banner/background-gradient.svg'}
				className='-z- absolute inset-y-0 right-0 w-[940px]'
			/>
			<NavBar />
			<Jumbotron />
			<Trusted />
			<About />
		</main>
	);
}
