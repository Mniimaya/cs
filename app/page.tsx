import { MainTitle } from './compomemts/MainTitle/MainTitle';
import { TeamStatsPage } from './compomemts/TeamStatsPage/TeamStatsPage';

export default function Home() {
  return (
    <div>
      <MainTitle>Командная статистика</MainTitle>
      <TeamStatsPage />
    </div>
  );
}
