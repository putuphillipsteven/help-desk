interface User {
	username: string;
	email: string;
}

export interface Ticket {
	id: number | undefined;
	subject: string | undefined;
	createdAt: string | undefined;
	user: User | undefined;
	team: string | undefined;
	agent: string | 'unassigned' | undefined;
	priority: string | undefined;
	status: string | undefined;
	details: string | undefined;
}

type Tickets = Ticket[];

export const tickets: Tickets = [
	{
		id: 1,
		subject: 'Tidak bisa login di prochain',
		createdAt: 'Sat, May 18, 2024, 09:42 AM',
		user: {
			username: 'Vincky Sedana',
			email: 'vinckysedana@gmail.com',
		},
		team: 'Dimata',
		agent: 'Pasek Okasana',
		priority: 'Low',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
	{
		id: 2,
		subject: 'Akun prochain logout otomatis setiap 5 menit',
		createdAt: 'Sat, May 18, 2024, 09:42 AM',
		user: {
			username: 'Dimata Admin',
			email: 'admin@dimata.com',
		},
		team: 'Dimata',
		agent: 'Unassigned',
		priority: 'Low',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
	{
		id: 3,
		subject: 'Tidak bisa backup data Hairisima',
		createdAt: 'Sat, May 18, 2024, 09:42 AM',
		user: {
			username: 'Dimata Admin',
			email: 'admin@dimata.com',
		},
		team: 'Dimata',

		agent: 'Pasek Okasana',
		priority: 'Low',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
	{
		id: 4,
		subject: 'Tidak bisa login di prochain',
		createdAt: 'Sat, May 18, 2024, 09:42 AM',
		user: {
			username: 'Tien Shen',
			email: 'tienshen@gmail.com',
		},
		team: 'Dimata',
		agent: 'Pasek Okasana',
		priority: 'Low',
		status: 'Open',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi pulvinar mi blandit fermentum. Cras justo elit, ullamcorper et tristique vitae, rhoncus sed enim. Phasellus porta sagittis commodo. Pellentesque maximus feugiat gravida. Donec vulputate facilisis enim, sit amet tempor turpis maximus eget. Donec convallis consequat turpis, a finibus ex.',
	},
];
