export interface Users {
  nickname: string;
  games: number;
  winrate: string;
  adr: number;
  kd: number;
  avgGames: number;
  avgWinrate: string;
}

export interface StatisticsItem {
  map: string;
  users: Users[];
}
