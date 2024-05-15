export interface Testimony {
	id: number;
	avatar: string;
	userName: string;
	position: string;
	company: string;
	logo: string;
	testimony: string;
}

export type Testimonials = Testimony[];

export const testimonials: Testimonials = [
	{
		id: 1,
		avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		userName: 'Alex Bass',
		position: 'Founder & Head of Product',
		company: 'Dimata',
		logo: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		testimony:
			'Berkat Dimata Help Desk, penanganan pertanyaan pelanggan kami menjadi lebih efisien. Antarmuka yang sederhana dan analitik yang kuat membantu tim kami memberikan dukungan yang responsif. Skalabilitasnya membuatnya sempurna untuk pertumbuhan bisnis kami. Dimata Help Desk benar-benar merevolusi manajemen help desk kami.',
	},
	{
		id: 2,
		avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		userName: 'Alex Piano',
		position: 'Founder & Head of Product',
		company: 'CRM Solutions',
		logo: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		testimony:
			'Berkat Dimata Help Desk, penanganan pertanyaan pelanggan kami menjadi lebih efisien. Antarmuka yang sederhana dan analitik yang kuat membantu tim kami memberikan dukungan yang responsif. Skalabilitasnya membuatnya sempurna untuk pertumbuhan bisnis kami. Dimata Help Desk benar-benar merevolusi manajemen help desk kami.',
	},
	{
		id: 3,
		avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		userName: 'Alex Drum',
		position: 'Founder & Head of Product',
		company: 'Apple',
		logo: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		testimony:
			'Berkat Dimata Help Desk, penanganan pertanyaan pelanggan kami menjadi lebih efisien. Antarmuka yang sederhana dan analitik yang kuat membantu tim kami memberikan dukungan yang responsif. Skalabilitasnya membuatnya sempurna untuk pertumbuhan bisnis kami. Dimata Help Desk benar-benar merevolusi manajemen help desk kami.',
	},
	{
		id: 4,
		avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		userName: 'Alex Guitar',
		position: 'Founder & Head of Product',
		company: 'Samsung',
		logo: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
		testimony:
			'Berkat Dimata Help Desk, penanganan pertanyaan pelanggan kami menjadi lebih efisien. Antarmuka yang sederhana dan analitik yang kuat membantu tim kami memberikan dukungan yang responsif. Skalabilitasnya membuatnya sempurna untuk pertumbuhan bisnis kami. Dimata Help Desk benar-benar merevolusi manajemen help desk kami.',
	},
];
