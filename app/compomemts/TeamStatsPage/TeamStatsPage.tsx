'use client';

import React, { useState } from 'react';
import s from './TeamStatsPage.module.scss';
import { TeamForm } from '../TeamForm/TeamForm';
import { PlayerSelection } from '../PlayerSelection/PlayerSelection';
import StatisticTable from '../StatisticTable/StatisticTable';
import { StatisticsItem } from '@/types/statistics';
import { fetchGetNicknames, fetchGetStats } from '@/API/stats';
import ButtonMain from '../UI/ButtonMain/ButtonMain';

// const data: StatisticsItem[] = [
//   {
//     map: 'Dust 2',
//     winRate: 72,
//     matches: 24,
//     kdRatio: 1.35,
//     adr: 88.4,
//     performance: 'best',
//     users: [
//       { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
//       { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
//       { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
//       { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
//       { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
//       { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
//       { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
//     ],
//   },
//   {
//     map: 'Dust 2',
//     users: [
//       { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
//       { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
//       { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
//       { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
//       { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
//       { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
//       { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
//     ],
//     winRate: 68,
//     matches: 18,
//     kdRatio: 1.28,
//     adr: 85.2,
//     performance: 'best',
//   },
//   {
//     map: 'Dust 2',
//     users: [
//       { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
//       { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
//       { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
//       { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
//       { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
//       { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
//       { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
//     ],
//     winRate: 52,
//     matches: 22,
//     kdRatio: 1.05,
//     adr: 79.1,
//     performance: 'average',
//   },
//   {
//     map: 'Dust 2',
//     users: [
//       { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
//       { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
//       { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
//       { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
//       { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
//       { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
//       { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
//     ],
//     winRate: 48,
//     matches: 15,
//     kdRatio: 0.98,
//     adr: 76.3,
//     performance: 'average',
//   },
//   {
//     map: 'Dust 2',
//     users: [
//       { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
//       { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
//       { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
//       { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
//       { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
//       { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
//       { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
//     ],
//     winRate: 42,
//     matches: 12,
//     kdRatio: 0.92,
//     adr: 72.1,
//     performance: 'average',
//   },
//   {
//     map: 'Dust 2',
//     users: [
//       { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
//       { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
//       { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
//       { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
//       { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
//       { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
//       { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
//     ],
//     winRate: 32,
//     matches: 12,
//     kdRatio: 0.85,
//     adr: 68.7,
//     performance: 'worst',
//   },
// ];

export const TeamStatsPage: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([
    // 's1mple',
    // 'ZywOo',
    // 'NiKo',
    // 'device',
    // 'sh1ro',
    // 'm0NESY',
    // 'b1t',
    // 'Ax1Le',
    // 'HObbit',
    // 'Jame',
    // 'frozen',
    // 'ropz',
    // 'KSCERATO',
    // 'yuurih',
    // 'FalleN',
    // 'fer',
    // 'coldzera',
    // 'Twistzz',
    // 'EliGE',
    // 'NAF',
    // 'Stewie2K',
    // 'flusha',
    // 'olofmeister',
    // 'GuardiaN',
    // 'kennyS',
    // 'dupreeh',
  ]);

  const [statsData, setStatsData] = React.useState<StatisticsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Отправка url
  const fetchTeamPlayers = async (url: string) => {
    fetchGetNicknames(url)
      .then((data) => {
        setPlayers(data);
        setLoading(true);
        setError('');
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      })
      .finally(() => setLoading(false));
  };

  // Отправка ников
  const fetchNicknames = async (nicknames: string[]) => {
    fetchGetStats(nicknames)
      .then((data) => {
        setStatsData(data);
        setLoading(true);
        setError('');
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={s.pageContainer}>
      <div className={s.titleWrapper}>
        <h1 className={s.pageTitle}>Статистика команды CS:GO</h1>
        {statsData.length > 0 && (
          <div className={s.btnWrapper}>
            <ButtonMain type="button" onClick={() => setStatsData([])}>
              Поменять игроков
            </ButtonMain>
            <ButtonMain
              type="button"
              style="additional"
              onClick={() => {
                setPlayers([]);
              }}
            >
              Поменять команду
            </ButtonMain>
          </div>
        )}
      </div>

      {statsData.length === 0 && (
        <>
          {!players.length ? <TeamForm onTeamSubmit={fetchTeamPlayers} loading={loading} /> : <PlayerSelection players={players} onSelectionSubmit={fetchNicknames} />}
          {error && <div className={s.error}>{error}</div>}
        </>
      )}

      {statsData.length > 0 && <StatisticTable data={statsData} />}
    </div>
  );
};
