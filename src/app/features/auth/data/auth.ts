import { axiosInstance, axiosInstancePMO } from '@/app/lib/utils/axios/axiosInstance';
import { SignInData } from '../../login/utils/signInSchema';
import { User } from '@/app/lib/utils/user/user';


export class Auth {
	constructor() {}

	setUserInLocalStorage(user: User) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	setUserInLocalStoragePMO(user: any) {
		localStorage.setItem('user', JSON.stringify(user));
	}

	public async login(data: SignInData) {
		try {
			const users = await axiosInstance.get('/users');

			const user: User = await users?.data.find((user: User) => user.email === data.email);

			if (!user) {
				throw new Error('Email not registered');
			}

			if (user.password !== data.password) {
				throw new Error('Wrong Password');
			}

			this.setUserInLocalStorage(user);

			return {
				message: 'Loggin Success',
			};
		} catch (err) {
			throw err;
		}
	}

	public async pmoLogin() {
		try {
			const extendedData = {
				username: 'admin',
				password: 'password123',
				ipAddress: '127.0.0.1',
			};
			const user = await axiosInstancePMO.post('/auth/username-login', extendedData);
			if (!user) throw new Error('Unexpected Error');
			this.setUserInLocalStoragePMO(user);

			return {
				message: 'Loggin Success',
			};
		} catch (err) {
			throw err;
		}
	}
}
