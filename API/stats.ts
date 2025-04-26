import { Players } from '@/types/statistics';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://192.168.3.20:5001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchGetNicknames = async (url: string): Promise<Players> => {
  try {
    const response = await apiClient.get('/api/Team', {
      params: {
        url,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка запроса:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
      throw new Error(error.response?.data?.message || 'Ошибка загрузки данных');
    } else {
      console.error('Неизвестная ошибка:', error);
      throw new Error('Произошла непредвиденная ошибка');
    }
  }
};

export const fetchGetStats = async (player: string[]) => {
  try {
    const response = await apiClient.get('/api/Maps', {
      params: {
        player,
      },
      paramsSerializer: {
        indexes: null,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка запроса:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
      throw new Error(error.response?.data?.message || 'Ошибка загрузки данных');
    } else {
      console.error('Неизвестная ошибка:', error);
      throw new Error('Произошла непредвиденная ошибка');
    }
  }
};
