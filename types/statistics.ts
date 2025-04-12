export interface Users {
  nickname: string;
  games: number;
  winrate: string;
  adr: number;
  kd: number;
}

export interface StatisticsItem {
  map: string;
  users: Users[];
  avgGames: number;
  avgWinrate: string;
}

export interface MapPerformance {
  map: string;
  winRate: number;
  matches: number;
  kdRatio: number;
  adr: number;
  performance: 'best' | 'average' | 'worst'; // Фиксируем конкретные значения
}
