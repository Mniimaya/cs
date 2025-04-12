import type { Metadata } from 'next';
import '../styles/globals.scss';
import s from './layout.module.scss';
import Navigation from './compomemts/Navigation/Navigation';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={s.body}>
        <Navigation />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  );
}
