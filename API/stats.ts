import axios from 'axios';

export const fetchGetNicknames = async (url: string) => {
  try {
    const response = await axios.get('/api/team-players', {
      headers: {
        'Content-Type': 'application/json',
      },
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

export const fetchGetStats = async (users: string[]) => {
  try {
    const response = await axios.get('/api/team-players', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        users,
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
