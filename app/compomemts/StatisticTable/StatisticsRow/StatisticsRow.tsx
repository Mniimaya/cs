import React from 'react';
import s from './StatisticsRow.module.scss';
import { MapPerformance } from '@/types/statistics';
import MapCard from '../../MapCard/MapCard';

export const StatisticsRow = ({ data }: { data: MapPerformance }) => {
  const getPerformanceColor = (performance: number) => {
    switch (performance) {
      case 0:
        return '#8F949F80'; // Серый
      case 1:
        return '#4CAF5080'; // Зеленый
      case 2:
        return '#FFC10780'; // Желтый
      case 3:
        return '#F4433680'; // Красный
      default:
        return '#9E9E9E80'; // Серый
    }
  };

  return (
    <div className={s.wrapper}>
      <MapCard map={data} />
      <div className={s.flex}>
        <div className={s.tableContainer}>
          {data.players.map((item, index) => (
            <div key={index} className={s.tableRow}>
              <div className={s.statsBlock} style={{ backgroundColor: getPerformanceColor(item.playerResult) }}>
                <div className={s.statsCell}>{item.nickname}</div>
                <div className={s.statsCell}>{item.gamesCount ? item.gamesCount : '-'}</div>
                <div className={s.statsCell}>{item.winrate ? item.winrate : '-'}</div>
                <div className={s.statsCell}>{item.adr ? item.adr : '-'}</div>
                <div className={s.statsCell}>{item.killsToDeaths ? item.killsToDeaths : '-'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
