type Team = {
	name: string;
	leader: string;
};

export interface Agent {
	id: number;
	name: string;
	email: string;
	role: 'Admin' | 'Agent';
	invitation?: 'Accepted' | 'Waiting';
	teams?: Team[];
}

export type Agents = Agent[];

export const agents: Agents = [
	{
		id: 1,
		name: 'Agus Sarimurni',
		email: 'sarimurni@gmail.com',
		role: 'Agent',
		teams: [{ name: 'Dimata', leader: 'I Ketut Kartika Tanjana' }],
	},
	{
		id: 2,
		name: 'Bagus Dewa Brahman',
		email: 'bagusdewa@gmail.com',
		role: 'Agent',
		teams: [{ name: 'Dimata', leader: 'I Ketut Kartika Tanjana' }],
	},
	{
		id: 3,
		name: 'Dewa Gede Mahendra Data',
		email: 'mahendra@gmail.com',
		role: 'Admin',
		teams: [
			{ name: 'Dimata', leader: 'I Ketut Kartika Tanjana' },
			{
				name: 'Apple',
				leader: 'I Ketut Kartika Tanjana',
			},
		],
	},
	{ id: 4, name: 'Dian Bahagia', email: 'bahagia@gmail.com', role: 'Admin' },
	{ id: 5, name: 'bahagia@gmail.com', email: 'kutilang@gmail.com', role: 'Agent' },
	{ id: 6, name: 'I Ketut Kartika Tanjana', email: 'kartika@gmail.com', role: 'Agent' },
	{ id: 7, name: 'Surya Jayante', email: 'jayante@gmail.com', role: 'Admin' },
	{ id: 8, name: 'Pasek Okasana', email: 'pasekokasana@gmail.com', role: 'Agent' },
	{
		id: 9,
		name: 'Wahyu Sutejo',
		email: 'wahyusutejo@gmail.com',
		role: 'Admin',
		invitation: 'Waiting',
	},
];
