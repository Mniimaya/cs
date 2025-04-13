import React from 'react';
import s from './MapCard.module.scss';
import Image from 'next/image';
import { MapPerformance } from '@/types/statistics';

const getPerformanceColor = (performance: string) => {
  switch (performance) {
    case 'best':
      return '#4CAF50'; // Ярко-зеленый
    case 'average':
      return '#FFC107'; // Желтый
    case 'worst':
      return '#F44336'; // Красный
    default:
      return '#9E9E9E';
  }
};

const getPerformanceLabel = (performance: string) => {
  switch (performance) {
    case 'best':
      return 'Сильная карта';
    case 'average':
      return 'Средний результат';
    case 'worst':
      return 'Слабая карта';
    default:
      return '';
  }
};

export default function MapCard({ map }: { map: MapPerformance }) {
  return (
    <div className={s.mapCard} style={{ borderLeft: `4px solid ${getPerformanceColor(map.performance)}` }}>
      <div className={s.mapImage}>
        <Image src="/images/1.jpeg" alt={map.map} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px)" />
        <div className={s.mapName}>{map.map}</div>
      </div>

      <div className={s.performanceTag} style={{ backgroundColor: getPerformanceColor(map.performance) }}>
        {getPerformanceLabel(map.performance)}
      </div>

      <div className={s.mapStats}>
        <div className={s.statRow}>
          <span className={s.statValue}>{map.winRate}%</span>
          <span className={s.statLabel}>Win Rate</span>
        </div>

        <div className={s.statGrid}>
          <div className={s.statItem}>
            <span className={s.statValue}>{map.kdRatio.toFixed(2)}</span>
            <span className={s.statLabel}>K/D</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>{map.adr}</span>
            <span className={s.statLabel}>ADR</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>{map.matches}</span>
            <span className={s.statLabel}>Matches</span>
          </div>
        </div>
      </div>
    </div>
  );
}
