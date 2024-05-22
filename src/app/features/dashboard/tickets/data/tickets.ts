interface Ticket {
	id: number;
	user: {
		username: string;
		email: string;
	};
	subject: string;
	agent: string | 'unassigned';
	status: string;
	details: string;
}

type Tickets = Ticket[];

export const tickets: Tickets = [
	{
		id: 1,
		user: {
			username: 'Vincky Sedana',
			email: 'vinckysedana@gmail.com',
		},
		subject: 'Tidak bisa login di prochain',
		agent: 'Pasek Okasana',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
	{
		id: 2,
		user: {
			username: 'Dimata Admin',
			email: 'admin@dimata.com',
		},
		subject: 'Akun prochain logout otomatis setiap 5 menit',
		agent: 'Unassigned',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
	{
		id: 3,
		user: {
			username: 'Dimata Admin',
			email: 'admin@dimata.com',
		},
		subject: 'Tidak bisa backup data Hairisima',
		agent: 'Pasek Okasana',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
	{
		id: 4,
		user: {
			username: 'Tien Shen',
			email: 'tienshen@gmail.com',
		},
		subject: 'Tidak bisa login di prochain',
		agent: 'Pasek Okasana',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
];
