'use client';

import React, { useEffect, useState } from 'react';
import s from './StatisticTable.module.scss';
import { StatisticsRow } from './StatisticsRow/StatisticsRow';
import { StatisticsItem } from '@/types/statistics';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';

const data: StatisticsItem[] = [
  {
    map: 'Dust 2',
    winRate: 72,
    matches: 24,
    kdRatio: 1.35,
    adr: 88.4,
    performance: 'best',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
    ],
  },
  {
    map: 'Dust 2',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
    ],
    winRate: 68,
    matches: 18,
    kdRatio: 1.28,
    adr: 85.2,
    performance: 'best',
  },
  {
    map: 'Dust 2',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
    ],
    winRate: 52,
    matches: 22,
    kdRatio: 1.05,
    adr: 79.1,
    performance: 'average',
  },
  {
    map: 'Dust 2',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
    ],
    winRate: 48,
    matches: 15,
    kdRatio: 0.98,
    adr: 76.3,
    performance: 'average',
  },
  {
    map: 'Dust 2',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
    ],
    winRate: 42,
    matches: 12,
    kdRatio: 0.92,
    adr: 72.1,
    performance: 'average',
  },
  {
    map: 'Dust 2',
    users: [
      { nickname: 's1mple', games: 245, winrate: '68%', adr: 92.5, kd: 1.45 },
      { nickname: 'ZywOo', games: 198, winrate: '72%', adr: 89.3, kd: 1.52 },
      { nickname: 'NiKo', games: 312, winrate: '63%', adr: 87.1, kd: 1.38 },
      { nickname: 'device', games: 176, winrate: '75%', adr: 83.7, kd: 1.41 },
      { nickname: 'EliGE', games: 289, winrate: '58%', adr: 79.4, kd: 1.22 },
      { nickname: 'ropz', games: 203, winrate: '71%', adr: 81.6, kd: 1.33 },
      { nickname: 'sh1ro', games: 157, winrate: '69%', adr: 76.8, kd: 1.47 },
    ],
    winRate: 32,
    matches: 12,
    kdRatio: 0.85,
    adr: 68.7,
    performance: 'worst',
  },
];

export default function StatisticTable() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />

      {!isLoading && (
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
          </div>

          <div className={s.list}>
            {data.map((row, index) => (
              <StatisticsRow data={row} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
