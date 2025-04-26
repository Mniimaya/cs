export interface Users {
  nickname: string;
  gamesCount: string;
  winrate: string;
  adr: string;
  killsToDeaths: string;
  playerResult: number;
}

export interface MapPerformance {
  imageUrl: string;
  name: string;
  analysisResult: number;
  averageGamesCount: string;
  averageWinrate: string;
  averageKillsToDeaths: string;
  averageADR: string;
  players: Users[];
}

type Player = {
  nickname: string;
  id: string;
};

export interface Players {
  name: string;
  playersList: Player[];
}
