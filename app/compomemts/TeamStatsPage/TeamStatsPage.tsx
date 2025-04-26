'use client';

import React, { useState } from 'react';
import s from './TeamStatsPage.module.scss';
import { TeamForm } from '../TeamForm/TeamForm';
import { PlayerSelection } from '../PlayerSelection/PlayerSelection';
import StatisticTable from '../StatisticTable/StatisticTable';
import { MapPerformance, Players } from '@/types/statistics';
import { fetchGetNicknames, fetchGetStats } from '@/API/stats';
import ButtonMain from '../UI/ButtonMain/ButtonMain';

export const TeamStatsPage: React.FC = () => {
  const [players, setPlayers] = useState<Players | null>(null);
  const [statsData, setStatsData] = React.useState<MapPerformance[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [teamName, setTeamName] = useState('');

  // Отправка url
  const fetchTeamPlayers = async (url: string) => {
    fetchGetNicknames(url)
      .then((data) => {
        setPlayers(data);
        setTeamName(data.name);
        setLoading(true);
        setError('');
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      })
      .finally(() => setLoading(false));
  };

  // Отправка ников
  const fetchNicknames = async (nicknames: string[]) => {
    fetchGetStats(nicknames)
      .then((data) => {
        setStatsData(data);
        setLoading(true);
        setError('');
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={s.pageContainer}>
      <div className={s.titleWrapper}>
        <h1 className={s.pageTitle}>Статистика {teamName !== '' ? <span className={s.teamName}>{teamName}</span> : 'команды CS:GO'} </h1>
        <div className={s.btnWrapper}>
          {statsData.length > 0 && (
            <ButtonMain type="button" onClick={() => setStatsData([])}>
              Поменять игроков
            </ButtonMain>
          )}
          {players && (
            <ButtonMain
              type="button"
              style="additional"
              onClick={() => {
                setPlayers(null);
                setTeamName('');
              }}
            >
              Поменять команду
            </ButtonMain>
          )}
        </div>
      </div>

      {statsData.length === 0 && (
        <>
          {!players ? <TeamForm onTeamSubmit={fetchTeamPlayers} loading={loading} /> : <PlayerSelection players={players} onSelectionSubmit={fetchNicknames} />}
          {error && <div className={s.error}>{error}</div>}
        </>
      )}

      {statsData.length > 0 && <StatisticTable data={statsData} />}
    </div>
  );
};
