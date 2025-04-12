import React from 'react';
import Image from 'next/image';
import styles from './TeamMapsPerformance.module.scss';

interface MapPerformance {
  map: string;
  winRate: number;
  matches: number;
  kdRatio: number;
  adr: number;
  performance: 'best' | 'average' | 'worst';
}

interface TeamMapsPerformanceProps {
  maps: MapPerformance[];
}

const TeamMapsPerformance: React.FC<TeamMapsPerformanceProps> = ({ maps }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Статистика по картам</h2>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: '#4CAF50' }} />
            <span>Сильные</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: '#FFC107' }} />
            <span>Средние</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: '#F44336' }} />
            <span>Слабые</span>
          </div>
        </div>
      </div>

      <div className={styles.mapsContainer}>
        {maps.map((map, index) => (
          <div key={index} className={styles.mapCard} style={{ borderLeft: `4px solid ${getPerformanceColor(map.performance)}` }}>
            <div className={styles.mapImage}>
              <Image src="/images/1.jpeg" alt={map.map} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px)" />
              <div className={styles.mapName}>{map.map}</div>
            </div>

            <div className={styles.performanceTag} style={{ backgroundColor: getPerformanceColor(map.performance) }}>
              {getPerformanceLabel(map.performance)}
            </div>

            <div className={styles.mapStats}>
              <div className={styles.statRow}>
                <span className={styles.statValue}>{map.winRate}%</span>
                <span className={styles.statLabel}>Win Rate</span>
              </div>

              <div className={styles.statGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{map.kdRatio.toFixed(2)}</span>
                  <span className={styles.statLabel}>K/D</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{map.adr}</span>
                  <span className={styles.statLabel}>ADR</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{map.matches}</span>
                  <span className={styles.statLabel}>Matches</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMapsPerformance;
