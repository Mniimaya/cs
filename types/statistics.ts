export interface Users {
  nickname: string;
  games: number;
  winrate: string;
  adr: number;
  kd: number;
}

export interface MapPerformance {
  map: string;
  winRate: number;
  matches: number;
  kdRatio: number;
  adr: number;
  performance: 'best' | 'average' | 'worst';
}

export interface StatisticsItem extends MapPerformance {
  users: Users[];
}
