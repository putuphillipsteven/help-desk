import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL, // replace with your API base URL
	timeout: 5000, // timeout after 5 seconds
	headers: {
		'Content-Type': 'application/json',
	},
});
export const axiosInstancePMO: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL_PMO, // replace with your API base URL
	timeout: 5000, // timeout after 5 seconds
	headers: {
		'Content-Type': 'application/json',
	},
});
