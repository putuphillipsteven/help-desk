interface Ticket {
	user: {
		username: string;
		email: string;
	};
	subject: string;
	agent: string | 'unassigned';
	status: string;
}

type Tickets = Ticket[];

export const tickets: Tickets = [
	{
		user: {
			username: 'Vincky Sedana',
			email: 'vinckysedana@gmail.com',
		},
		subject: 'Tidak bisa login di prochain',
		agent: 'Pasek Okasana',
		status: 'Open',
	},
	{
		user: {
			username: 'Dimata Admin',
			email: 'admin@dimata.com',
		},
		subject: 'Akun prochain logout otomatis setiap 5 menit',
		agent: 'Unassigned',
		status: 'Open',
	},
	{
		user: {
			username: 'Dimata Admin',
			email: 'admin@dimata.com',
		},
		subject: 'Tidak bisa backup data Hairisima',
		agent: 'Pasek Okasana',
		status: 'Open',
	},
	{
		user: {
			username: 'Tien Shen',
			email: 'tienshen@gmail.com',
		},
		subject: 'Tidak bisa login di prochain',
		agent: 'Pasek Okasana',
		status: 'Open',
	},
];
