interface User {
	username: string;
	email: string;
}

export interface Ticket {
	id: number;
	subject: string;
	user: User;
	team: string;
	agent: string | 'unassigned';
	priority: string;
	status: string;
	details: string;
}

type Tickets = Ticket[];

export const tickets: Tickets = [
	{
		id: 1,
		subject: 'Tidak bisa login di prochain',
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
