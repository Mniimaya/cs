import React from 'react';
import s from './MapCard.module.scss';
import Image from 'next/image';
import { MapPerformance } from '@/types/statistics';

const getPerformanceColor = (performance: number) => {
  switch (performance) {
    case 0:
      return '#8F949F'; // Серый
    case 1:
      return '#4CAF50'; // Ярко-зеленый
    case 2:
      return '#FFC107'; // Желтый
    case 3:
      return '#F44336'; // Красный
    default:
      return '#9E9E9E';
  }
};

const getPerformanceLabel = (performance: number) => {
  switch (performance) {
    case 0:
      return 'Мало результатов';
    case 1:
      return 'Сильная карта ';
    case 2:
      return 'Средний результат';
    case 3:
      return 'Слабая карта';
    default:
      return '';
  }
};

export default function MapCard({ map }: { map: MapPerformance }) {
  return (
    <div className={s.mapCard} style={{ borderLeft: `4px solid ${getPerformanceColor(map.analysisResult)}` }}>
      <div className={s.mapImage}>
        <img src={map.imageUrl} alt={map.name} style={{ objectFit: 'cover' }} />
        <div className={s.mapName}>{map.name}</div>
      </div>

      <div className={s.performanceTag} style={{ backgroundColor: getPerformanceColor(map.analysisResult) }}>
        {getPerformanceLabel(map.analysisResult)}
      </div>

      <div className={s.mapStats}>
        <div className={s.statRow}>
          <span className={s.statValue}>{map.averageWinrate}%</span>
          <span className={s.statLabel}>Win Rate</span>
        </div>

        <div className={s.statGrid}>
          <div className={s.statItem}>
            <span className={s.statValue}>{map.averageKillsToDeaths}</span>
            <span className={s.statLabel}>K/D</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>{map.averageADR}</span>
            <span className={s.statLabel}>ADR</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>{map.averageGamesCount}</span>
            <span className={s.statLabel}>Matches</span>
          </div>
        </div>
      </div>
    </div>
  );
}
