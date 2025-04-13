'use client';

import React, { useEffect, useState } from 'react';
import s from './StatisticTable.module.scss';
import { StatisticsRow } from './StatisticsRow/StatisticsRow';
import { StatisticsItem } from '@/types/statistics';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';

export default function StatisticTable({ data }: { data: StatisticsItem[] }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />

      {!isLoading && (
        <div className={s.container}>
          <div className={s.header}>
            <h2 className={s.title}>Подробная статистика</h2>
          </div>
          <div className={s.tableHeader}>
            <div className={`${s.headerCell} ${s.cardName}`}>Карта</div>
            <div className={s.headerGroup}>
              <div className={`{${s.headerCell} ${s.cardNick}`} style={{ textAlign: 'start' }}>
                Никнейм
              </div>
              <div className={s.headerCell}>Кол-во игр</div>
              <div className={s.headerCell}>Винрейт</div>
              <div className={s.headerCell}>ADR</div>
              <div className={s.headerCell}>K/D</div>
            </div>
          </div>

          <div className={s.list}>
            {data.map((row, index) => (
              <StatisticsRow data={row} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
