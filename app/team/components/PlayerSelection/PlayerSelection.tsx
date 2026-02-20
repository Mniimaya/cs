'use client';

import React, { useState, useEffect } from 'react';
import s from './PlayerSelection.module.scss';
import ButtonMain from '../../../../components/UI/ButtonMain/ButtonMain';
import { Players } from '@/types/statistics';

interface PlayerSelectionProps {
  players: Players;
  onSelectionSubmit: (selectedPlayers: string[]) => void;
}

export const PlayerSelection: React.FC<PlayerSelectionProps> = ({ players, onSelectionSubmit }) => {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const handleCheckboxChange = (player: string) => {
    setSelectedPlayers((prev) => (prev.includes(player) ? prev.filter((p) => p !== player) : [...prev, player]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectionSubmit(selectedPlayers);
  };

  const handlerChooseAll = () => {
    if (isSelectedAll) {
      setSelectedPlayers([]);
    } else {
      setSelectedPlayers(players.playersList.map((item) => `${item.nickname}|${item.id}`));
    }
    setIsSelectedAll(!isSelectedAll);
  };

  useEffect(() => {
    setIsSelectedAll(selectedPlayers.length === players.playersList.length);
  }, [selectedPlayers, players.playersList.length]);

  return (
    <div className={s.selectionContainer}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>
          Выберите игроков для анализа
          <ButtonMain type="button" onClick={handlerChooseAll}>
            {isSelectedAll ? 'Сбросить' : 'Выбрать всех'}
          </ButtonMain>
        </h2>
        <div className={s.playersList}>
          {players.playersList.map((player) => (
            <label key={player.id} className={s.playerItem}>
              <input type="checkbox" checked={selectedPlayers.includes(`${player.nickname}|${player.id}`)} onChange={() => handleCheckboxChange(`${player.nickname}|${player.id}`)} className={s.checkbox} />
              <span className={s.playerName}>{player.nickname}</span>
            </label>
          ))}
        </div>
        <ButtonMain type="submit" disabled={selectedPlayers.length === 0}>
          Показать статистику
        </ButtonMain>
      </form>
    </div>
  );
};
