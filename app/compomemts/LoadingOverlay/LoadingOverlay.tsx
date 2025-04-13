import React from 'react';
import s from './LoadingOverlay.module.scss';

export const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className={s.overlay}>
      <div className={s.content}>
        <div className={s.spinner}></div>
        <p className={s.text}>Загрузка данных...</p>
        <div className={s.progressBar}></div>
      </div>
    </div>
  );
};
