import axios, { AxiosError, AxiosResponse } from 'axios';
import { GetTicketFilter } from '../interfaces/i.ticket.interactor';
import { ITicketRepository } from '../interfaces/i.ticket.repository';
import { axiosInstance } from '../lib/utils/axios/axiosInstance';

export class TicketRepository implements ITicketRepository {
	async getTicket(filter: GetTicketFilter) {
		try {
			const response: AxiosResponse<any> = await axiosInstance.get('/ticket', {
				params: {
					...filter,
				},
			});
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				console.error('Request failed with status code', axiosError.response?.status);
				console.error('Error message:', axiosError.message);
				throw axiosError; // Rethrow AxiosError for higher-level handling
			} else {
				throw error; // Rethrow other types of errors
			}
		}
	}
}
