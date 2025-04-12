import { MainTitle } from './compomemts/MainTitle/MainTitle';
import StatisticTable from './compomemts/StatisticTable/StatisticTable';
import TeamMapsPerformance from './compomemts/TeamMapsPerformance/TeamMapsPerformance';

const mapsData1 = [
  { map: 'Mirage', winRate: 72, matches: 24, kdRatio: 1.35, adr: 88.4, performance: 'best' },
  { map: 'Inferno', winRate: 68, matches: 18, kdRatio: 1.28, adr: 85.2, performance: 'best' },
  { map: 'Dust 2', winRate: 52, matches: 22, kdRatio: 1.05, adr: 79.1, performance: 'average' },
  { map: 'Overpass', winRate: 48, matches: 15, kdRatio: 0.98, adr: 76.3, performance: 'average' },
  { map: 'Vertigo', winRate: 42, matches: 12, kdRatio: 0.92, adr: 72.1, performance: 'average' },
  { map: 'Nuke', winRate: 32, matches: 12, kdRatio: 0.85, adr: 68.7, performance: 'worst' },
  { map: 'Ancient', winRate: 28, matches: 10, kdRatio: 0.79, adr: 65.4, performance: 'worst' },
];

export default function Home() {
  return (
    <div>
      <MainTitle>Командная статистика</MainTitle>
      <div style={{ marginBottom: 40 }}>
        <TeamMapsPerformance maps={mapsData1} />
      </div>

      <StatisticTable />
    </div>
  );
}
