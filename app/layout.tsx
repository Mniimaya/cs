import "../styles/globals.scss";
import s from "./layout.module.scss";
import Navigation from "../components/Navigation/Navigation";

export const metadata = {
  metadataBase: new URL("https://faceitstats.ru"),
  title: {
    default: "Faceit stats CS2",
    template: "%s | Faceit Stats CS2",
  },
  description:
    "Check Faceit CS2 player statistics, ELO, match history, K/D ratio, win rate and detailed performance analytics.",
  keywords: [
    "faceit stats cs2",
    "cs2 faceit elo",
    "cs2 player statistics",
    "faceit finder cs2",
    "cs2 match history",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Faceit Stats CS2",
    description:
      "Track CS2 Faceit ELO, K/D ratio, match history and detailed player analytics.",
    url: "https://faceitstats.ru",
    siteName: "Faceit Stats CS2",
  },
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
        <main className={`${s.main}`}>{children}</main>
      </body>
    </html>
  );
}
