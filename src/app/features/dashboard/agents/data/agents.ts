export interface Agent {
	name: string;
	email: string;
	role: 'Admin' | 'Agent';
	invitation?: 'Accepted' | 'Waiting';
}

export type Agents = Agent[];

export const agents: Agents = [
	{ name: 'Agus Sarimurni', email: 'sarimurni@gmail.com', role: 'Agent' },
	{ name: 'Bagus Dewa Brahman', email: 'bagusdewa@gmail.com', role: 'Agent' },
	{ name: 'Dewa Gede Mahendra Data', email: 'mahendra@gmail.com', role: 'Admin' },
	{ name: 'Dian Bahagia', email: 'bahagia@gmail.com', role: 'Admin' },
	{ name: 'bahagia@gmail.com', email: 'kutilang@gmail.com', role: 'Agent' },
	{ name: 'I Ketut Kartika Tanjana', email: 'kartika@gmail.com', role: 'Agent' },
	{ name: 'Surya Jayante', email: 'jayante@gmail.com', role: 'Admin' },
	{ name: 'Pasek Okasana', email: 'pasekokasana@gmail.com', role: 'Agent' },
	{ name: 'Wahyu Sutejo', email: 'wahyusutejo@gmail.com', role: 'Admin', invitation: 'Waiting' },
];
