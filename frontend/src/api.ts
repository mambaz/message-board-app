import axios from 'axios';
import { Message,  CreateMessageRequest } from './types';

const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
  getMessages: async (): Promise<Message[]> => {
    try {
      const response = await axios.get<Message[]>(`${API_BASE_URL}/messages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  },
    createMessage: async (messageData: CreateMessageRequest): Promise<Message> => {
        try {
        const response = await axios.post<Message>(`${API_BASE_URL}/messages`, messageData);
        return response.data;
        } catch (error) {
        console.error('Error creating message:', error);
        throw error;
        }
    }
};