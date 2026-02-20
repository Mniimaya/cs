"use client";

import { fetchGetStatsUser } from "@/API/stats";
import { PlayersGetStatsForm } from "@/components/PlayersGetStatsForm/PlayersGetStatsForm";
import ButtonMain from "@/components/UI/ButtonMain/ButtonMain";
import { ErrorMessage } from "@/components/UI/ErrorMessage/ErrorMessage";
import { MapPerformance } from "@/types/statistics";
import React, { useState } from "react";
import { StatisticsList } from "../StatisticsList/StatisticsList";
import s from "./UserStats.module.scss";

export const UserStats = () => {
  const [statsData, setStatsData] = React.useState<MapPerformance[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGetUserStats = async (url: string) => {
    fetchGetStatsUser(url)
      .then((data) => {
        setStatsData(data);
        setLoading(true);
        setError("");
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={s.pageContainer}>
      <div className={s.titleWrapper}>
        <h1 className={s.pageTitle}>
          Статистика{" "}
          {statsData.length !== 0 ? (
            <span className={s.teamName}>
              {statsData[0].players[0].nickname}
            </span>
          ) : (
            "игрока CS:GO"
          )}
        </h1>
        <div className={s.btnWrapper}>
          {statsData.length > 0 && (
            <ButtonMain
              style="additional"
              type="button"
              onClick={() => {
                setStatsData([]);
              }}
            >
              Поменять игрока
            </ButtonMain>
          )}
        </div>
      </div>

      {statsData.length === 0 && (
        <>
          <PlayersGetStatsForm
            onTeamSubmit={fetchGetUserStats}
            loading={loading}
            type="user"
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}

      {statsData.length > 0 && <StatisticsList data={statsData} />}
    </div>
  );
};
