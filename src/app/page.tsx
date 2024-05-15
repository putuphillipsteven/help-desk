import { useRouter } from 'next/router';
import About from './ui/home/about/about';
import Integration from './ui/home/integration/integration';
import Jumbotron from './ui/home/jumbotron/jumbotron';
import NavBar from './ui/home/navbar/navbar';
import Platform from './ui/home/platform/platform';
import Testimonials from './ui/home/testimonials/testimonials';
import Trusted from './ui/home/trusted/trusted';
import Resources from './ui/home/resources/resources';
import Pricing from './ui/home/pricing/pricing';
import Permission from './ui/home/permission/permission';

export default function Home() {
	return (
		<main className='centering-flex-col min-h-screen w-full bg-white left-0'>
			<img
				src={'banner/background-gradient.svg'}
				className='absolute inset-y-0 right-0 w-[940px]'
			/>
			<NavBar />
			<Jumbotron />
			<Trusted />
			<About />
			<Platform />
			<Integration />
			<Testimonials />
			<Resources />
			<Pricing />
			<Permission />
		</main>
	);
}
