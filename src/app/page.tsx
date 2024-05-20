import Image from 'next/image';
import NavBar from './features/home/navbar/navbar';
import Jumbotron from './features/home/jumbotron/jumbotron';
import Trusted from './features/home/trusted/trusted';
import About from './features/home/about/about';
import Platform from './features/home/platform/platform';
import Integration from './features/home/integration/integration';
import Testimonials from './features/home/testimonials/testimonials';
import Resources from './features/home/resources/resources';
import Pricing from './features/home/pricing/pricing';
import Permission from './features/home/permission/permission';
import Solutions from './features/home/solutions/solutions';
import EmailSection from './features/home/email-section/email-section';
import Footer from './features/home/footer/footer';

export default function Home() {
	return (
		<main className='centering-flex-col min-h-screen w-full bg-white left-0'>
			<Image
				src={'banner/background-gradient.svg'}
				className='absolute inset-y-0 right-0 -top-[100px]'
				width={940}
				height={720}
				alt='background'
				style={{
					width: 940,
					height: 720,
				}}
				priority={false}
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
			<Solutions />
			<EmailSection />
			<Footer />
		</main>
	);
}
