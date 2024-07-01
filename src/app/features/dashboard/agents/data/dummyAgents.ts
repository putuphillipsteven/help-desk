import { AgentsProps } from './agents';

export const agentLists: AgentsProps[] = [
	{
		id: 1,
		name: 'Agus Sarimurni',
		email: 'sarimurni@gmail.com',
		role: 'Agent',
		teams: [{ name: 'Dimata', leader: 'I Ketut Kartika Tanjana' }],
		invitation: 'Waiting',
		tickets: [
			{ priority: 'High', requester: 'John Doe', subject: 'Tidak bisa login prochain' },
			{ priority: 'Medium', requester: 'Jane Smith', subject: 'Network issue in office' },
			{ priority: 'Low', requester: 'Alex Brown', subject: 'Printer not working' },
			{ priority: 'High', requester: 'Emily Davis', subject: 'Server outage' },
			{ priority: 'Medium', requester: 'Michael Johnson', subject: 'Software update required' },
		],
	},
	{
		id: 2,
		name: 'Bagus Dewa Brahman',
		email: 'bagusdewa@gmail.com',
		role: 'Agent',
		teams: [{ name: 'Dimata', leader: 'I Ketut Kartika Tanjana' }],
		tickets: [
			{ priority: 'Low', requester: 'Sophia Wilson', subject: 'Email delivery delay' },
			{ priority: 'High', requester: 'Daniel Clark', subject: 'Database connection failure' },
			{ priority: 'Medium', requester: 'Olivia Martinez', subject: 'Website performance issue' },
			{ priority: 'Low', requester: 'Ethan Anderson', subject: 'File access permission' },
			{ priority: 'High', requester: 'Isabella Thomas', subject: 'Critical system error' },
		],
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
		tickets: [
			{ priority: 'High', requester: 'John Doe', subject: 'Tidak bisa login prochain' },
			{ priority: 'Medium', requester: 'Jane Smith', subject: 'Network issue in office' },
			{ priority: 'Low', requester: 'Alex Brown', subject: 'Printer not working' },
			{ priority: 'High', requester: 'Emily Davis', subject: 'Server outage' },
			{ priority: 'Medium', requester: 'Michael Johnson', subject: 'Software update required' },
		],
	},
	{
		id: 4,
		name: 'Dian Bahagia',
		email: 'bahagia@gmail.com',
		role: 'Admin',
		tickets: [
			{ priority: 'Low', requester: 'Sophia Wilson', subject: 'Email delivery delay' },
			{ priority: 'High', requester: 'Daniel Clark', subject: 'Database connection failure' },
			{ priority: 'Medium', requester: 'Olivia Martinez', subject: 'Website performance issue' },
			{ priority: 'Low', requester: 'Ethan Anderson', subject: 'File access permission' },
			{ priority: 'High', requester: 'Isabella Thomas', subject: 'Critical system error' },
		],
	},
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
