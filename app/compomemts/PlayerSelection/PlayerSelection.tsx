'use client';

import React, { useState } from 'react';
import s from './PlayerSelection.module.scss';
import ButtonMain from '../UI/ButtonMain/ButtonMain';

interface PlayerSelectionProps {
  players: string[];
  onSelectionSubmit: (selectedPlayers: string[]) => void;
}

export const PlayerSelection: React.FC<PlayerSelectionProps> = ({ players, onSelectionSubmit }) => {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  const handleCheckboxChange = (player: string) => {
    setSelectedPlayers((prev) => (prev.includes(player) ? prev.filter((p) => p !== player) : [...prev, player]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectionSubmit(selectedPlayers);
  };

  return (
    <div className={s.selectionContainer}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Выберите игроков для анализа</h2>
        <div className={s.playersList}>
          {players.map((player) => (
            <label key={player} className={s.playerItem}>
              <input type="checkbox" checked={selectedPlayers.includes(player)} onChange={() => handleCheckboxChange(player)} className={s.checkbox} />
              <span className={s.playerName}>{player}</span>
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
