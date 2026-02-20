import React from "react";
import s from "./MapCard.module.scss";
import { MapPerformance } from "@/types/statistics";
import Image from "next/image";

const getPerformanceColor = (performance: number) => {
  switch (performance) {
    case 0:
      return "#8F949F"; // Серый
    case 1:
      return "#4CAF50"; // Ярко-зеленый
    case 2:
      return "#FFC107"; // Желтый
    case 3:
      return "#F44336"; // Красный
    default:
      return "#9E9E9E";
  }
};

const getPerformanceLabel = (performance: number) => {
  switch (performance) {
    case 0:
      return "Мало результатов";
    case 1:
      return "Сильная карта ";
    case 2:
      return "Средний результат";
    case 3:
      return "Слабая карта";
    default:
      return "";
  }
};

const mapImages: Record<string, string> = {
  Dust2: "dust2.jpeg",
  Mirage: "mirage.jpeg",
  Inferno: "inferno.jpeg",
  Nuke: "nuke.jpeg",
  Overpass: "overpass.jpeg",
  Ancient: "ancient.jpeg",
  Anubis: "anubis.jpeg",
};

export default function MapCard({ map }: { map: MapPerformance }) {
  const imagePath = mapImages[map.name];
  return (
    <div
      className={s.mapCard}
      style={{
        borderLeft: `4px solid ${getPerformanceColor(map.analysisResult)}`,
      }}
    >
      <div className={s.mapImage}>
        <Image
          src={`/images/maps/${imagePath}`}
          alt={map.name}
          width={300}
          height={120}
          style={{ objectFit: "cover" }}
        />
        <div className={s.mapName}>{map.name}</div>
      </div>

      <div
        className={s.performanceTag}
        style={{ backgroundColor: getPerformanceColor(map.analysisResult) }}
      >
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
