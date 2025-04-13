'use client';

import React, { useState } from 'react';
import s from './TeamForm.module.scss';
import ButtonMain from '../UI/ButtonMain/ButtonMain';

interface TeamFormProps {
  onTeamSubmit: (url: string) => void;
  loading: boolean;
}

export const TeamForm: React.FC<TeamFormProps> = ({ onTeamSubmit, loading }) => {
  const [teamUrl, setTeamUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTeamSubmit(teamUrl);
  };

  return (
    <div className={s.teamFormContainer}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Введите URL команды</h2>
        <div className={s.inputGroup}>
          <input type="text" value={teamUrl} onChange={(e) => setTeamUrl(e.target.value)} placeholder="https://www.faceit.com/ru/teams/id" className={s.input} required />
          <ButtonMain type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Получить игроков'}
          </ButtonMain>
        </div>
      </form>
    </div>
  );
};
