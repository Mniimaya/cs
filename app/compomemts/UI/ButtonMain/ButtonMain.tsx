'use client';

import React from 'react';
import s from './ButtonMain.module.scss';

export default function ButtonMain({ type, children, disabled, style = 'main', onClick }: { type: 'submit' | 'reset' | 'button' | undefined; children: React.ReactNode; disabled?: boolean; style?: 'main' | 'additional'; onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button onClick={onClick} className={`${style === 'main' ? s.btn : s.btnAdd}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
