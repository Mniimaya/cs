"use client";

import React, { useState } from "react";
import s from "./PlayersGetStatsForm.module.scss";
import ButtonMain from "../UI/ButtonMain/ButtonMain";

interface TeamFormProps {
  onTeamSubmit: (url: string) => void;
  loading: boolean;
  type: "team" | "user";
}

export const PlayersGetStatsForm: React.FC<TeamFormProps> = ({
  onTeamSubmit,
  loading,
  type,
}) => {
  const [valueUrl, setValueUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTeamSubmit(valueUrl);
  };

  return (
    <div className={s.teamFormContainer}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>
          Введите URL {type === "team" ? "команды" : "игрока"}
        </h2>
        <div className={s.inputGroup}>
          <input
            type="text"
            value={valueUrl}
            onChange={(e) => setValueUrl(e.target.value)}
            placeholder={
              type === "team"
                ? "https://www.faceit.com/ru/teams/id"
                : "https://www.faceit.com/ru/players/nickname"
            }
            className={s.input}
            required
          />
          <ButtonMain type="submit" disabled={loading}>
            {loading
              ? "Загрузка..."
              : type === "team"
                ? "Получить игроков"
                : "Получить статистику игрока"}
          </ButtonMain>
        </div>
      </form>
    </div>
  );
};
