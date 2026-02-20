import { MainTitle } from '../../components/MainTitle/MainTitle';
import { TeamStatsPage } from './components/TeamStatsPage/TeamStatsPage';

export default function Home() {
  return (
    <div>
      <MainTitle>Статистика по команде</MainTitle>
      <TeamStatsPage />
    </div>
  );
}
