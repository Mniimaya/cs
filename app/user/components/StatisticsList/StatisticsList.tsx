import MapCard from "@/components/MapCard/MapCard";
import { MapPerformance } from "@/types/statistics";
import React from "react";
import s from "./StatisticsList.module.scss";

export const StatisticsList = ({ data }: { data: MapPerformance[] }) => {
  return (
    <div className={s.wrapper}>
      {data.map((item) => (
        <MapCard key={item.imageUrl} map={item} />
      ))}
    </div>
  );
};
