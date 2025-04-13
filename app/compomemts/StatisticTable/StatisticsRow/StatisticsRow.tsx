import React from 'react';
import s from './StatisticsRow.module.scss';
import { StatisticsItem, Users } from '@/types/statistics';
import MapCard from '../../MapCard/MapCard';

export const StatisticsRow = ({ data }: { data: StatisticsItem }) => {
  const getStatsColor = (user: Users) => {
    if (parseFloat(user?.winrate) > 60 && user.kd > 1.3) return '#1a3a1a';
    if (parseFloat(user?.winrate) < 40 || user.kd < 0.9) return '#3a1a1a';
    return '#3a3a1a';
  };

  return (
    <div className={s.wrapper}>
      <MapCard map={{ map: data.map, winRate: data.winRate, matches: data.matches, kdRatio: data.kdRatio, adr: data.adr, performance: data.performance }} />
      <div className={s.flex}>
        <div className={s.tableContainer}>
          {data.users.map((item, index) => (
            <div key={index} className={s.tableRow}>
              <div className={s.statsBlock} style={{ backgroundColor: getStatsColor(item) }}>
                <div className={s.statsCell}>{item.nickname}</div>
                <div className={s.statsCell}>{item.games}</div>
                <div className={s.statsCell}>{item.winrate}</div>
                <div className={s.statsCell}>{item.adr}</div>
                <div className={s.statsCell}>{item.kd}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
