'use client';

import React, { useRef } from 'react';
import s from './StatisticTable.module.scss';
import { StatisticsRow } from './StatisticsRow/StatisticsRow';
import { StatisticsItem } from '@/types/statistics';

const data: StatisticsItem[] = [
  {
    map: 'Dust 2',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45, avgGames: 7, avgWinrate: '65%' },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52, avgGames: 6, avgWinrate: '70%' },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38, avgGames: 8, avgWinrate: '60%' },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41, avgGames: 5, avgWinrate: '72%' },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22, avgGames: 9, avgWinrate: '55%' },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33, avgGames: 6, avgWinrate: '69%' },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47, avgGames: 4, avgWinrate: '67%' },
    ],
  },
  {
    map: 'Mirage',
    users: [
      { nickname: 'Ax1Le', games: 187, winrate: '64%', adr: 84.2, kd: 1.29, avgGames: 5, avgWinrate: '62%' },
      { nickname: 'm0NESY', games: 132, winrate: '73%', adr: 88.9, kd: 1.56, avgGames: 3, avgWinrate: '71%' },
      { nickname: 'KSCERATO', games: 276, winrate: '61%', adr: 80.3, kd: 1.25, avgGames: 7, avgWinrate: '59%' },
      { nickname: 'b1t', games: 201, winrate: '67%', adr: 78.5, kd: 1.31, avgGames: 6, avgWinrate: '65%' },
      { nickname: 'YEKINDAR', games: 298, winrate: '59%', adr: 85.7, kd: 1.18, avgGames: 8, avgWinrate: '57%' },
      { nickname: 'Jame', games: 167, winrate: '74%', adr: 72.4, kd: 1.42, avgGames: 4, avgWinrate: '73%' },
      { nickname: 'frozen', games: 223, winrate: '66%', adr: 79.1, kd: 1.27, avgGames: 6, avgWinrate: '64%' },
    ],
  },
  {
    map: 'Inferno',
    users: [
      { nickname: 'blameF', games: 254, winrate: '62%', adr: 86.3, kd: 1.34, avgGames: 7, avgWinrate: '60%' },
      { nickname: 'huNter-', games: 189, winrate: '65%', adr: 82.7, kd: 1.28, avgGames: 5, avgWinrate: '63%' },
      { nickname: 'Spinx', games: 176, winrate: '70%', adr: 77.9, kd: 1.22, avgGames: 4, avgWinrate: '68%' },
      { nickname: 'arT', games: 312, winrate: '55%', adr: 91.2, kd: 1.08, avgGames: 9, avgWinrate: '53%' },
      { nickname: 'Broky', games: 198, winrate: '71%', adr: 74.6, kd: 1.39, avgGames: 5, avgWinrate: '70%' },
      { nickname: 'Xyp9x', games: 143, winrate: '76%', adr: 68.3, kd: 1.17, avgGames: 3, avgWinrate: '75%' },
      { nickname: 'Twistzz', games: 267, winrate: '63%', adr: 80.5, kd: 1.31, avgGames: 7, avgWinrate: '61%' },
    ],
  },
  {
    map: 'Nuke',
    users: [
      { nickname: 'electronic', games: 201, winrate: '68%', adr: 83.4, kd: 1.37, avgGames: 5, avgWinrate: '66%' },
      { nickname: 'Perfecto', games: 178, winrate: '72%', adr: 71.8, kd: 1.24, avgGames: 4, avgWinrate: '71%' },
      { nickname: 'NAF', games: 287, winrate: '64%', adr: 79.2, kd: 1.29, avgGames: 7, avgWinrate: '62%' },
      { nickname: 'FL1T', games: 156, winrate: '69%', adr: 84.7, kd: 1.41, avgGames: 4, avgWinrate: '67%' },
      { nickname: 'syrsoN', games: 132, winrate: '73%', adr: 86.3, kd: 1.52, avgGames: 3, avgWinrate: '72%' },
      { nickname: 'HooXi', games: 298, winrate: '58%', adr: 65.4, kd: 0.92, avgGames: 8, avgWinrate: '56%' },
      { nickname: 'SunPayus', games: 187, winrate: '67%', adr: 78.9, kd: 1.26, avgGames: 5, avgWinrate: '65%' },
    ],
  },
];

export default function StatisticTable() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>Подробная статистика</h2>
      </div>
      <div className={s.tableHeader}>
        <div className={`${s.headerCell} ${s.cardName}`}>Карта</div>
        <div className={s.headerGroup}>
          <div className={`{${s.headerCell} ${s.cardNick}`} style={{ textAlign: 'start' }}>
            Никнейм
          </div>
          <div className={s.headerCell}>Кол-во игр</div>
          <div className={s.headerCell}>Винрейт</div>
          <div className={s.headerCell}>ADR</div>
          <div className={s.headerCell}>K/D</div>
        </div>
        <div className={s.headerCell}>Среднее кол-во игр</div>
        <div className={s.headerCell}>Средний винрейт</div>
      </div>

      <div className={s.list}>
        {data.map((row, index) => (
          <StatisticsRow data={row} key={index} />
        ))}
      </div>
    </div>
  );
}
