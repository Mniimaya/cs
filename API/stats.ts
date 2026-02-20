import { Players, MapPerformance } from "@/types/statistics";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchGetNicknames = async (url: string): Promise<Players> => {
  try {
    const response = await apiClient.get("/team", {
      params: {
        url,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Ошибка запроса:", {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
      throw new Error(
        error.response?.data?.message || "Ошибка загрузки данных",
      );
    } else {
      console.error("Неизвестная ошибка:", error);
      throw new Error("Произошла непредвиденная ошибка");
    }
  }
};

export const fetchGetStatsTeam = async (player: string[]) => {
  try {
    const response = await apiClient.get("/maps", {
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
      console.error("Ошибка запроса:", {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
      throw new Error(
        error.response?.data?.message || "Ошибка загрузки данных",
      );
    } else {
      console.error("Неизвестная ошибка:", error);
      throw new Error("Произошла непредвиденная ошибка");
    }
  }
};

export const fetchGetStatsUser = async (
  url: string,
): Promise<MapPerformance[]> => {
  try {
    const response = await apiClient.get("/player/stats", {
      params: {
        url,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Ошибка запроса:", {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
      throw new Error(
        error.response?.data?.message || "Ошибка загрузки данных",
      );
    } else {
      console.error("Неизвестная ошибка:", error);
      throw new Error("Произошла непредвиденная ошибка");
    }
  }
};
