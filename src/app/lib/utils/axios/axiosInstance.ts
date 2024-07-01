import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8383/api/v1/master', // replace with your API base URL
	timeout: 5000, // timeout after 5 seconds
	headers: {
		'Content-Type': 'application/json',
	},
});
export const axiosInstancePMO: AxiosInstance = axios.create({
	baseURL: 'http://localhost:8383/api/v1/master', // replace with your API base URL
	timeout: 5000, // timeout after 5 seconds
	headers: {
		'Content-Type': 'application/json',
	},
});
