import React from 'react';
import s from './MainTitle.module.scss';

export const MainTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.titleContainer}>
      <h2 className={s.mainTitle}>{children}</h2>
      <div className={s.titleUnderline} />
    </div>
  );
};
