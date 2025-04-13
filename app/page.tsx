import { MainTitle } from './compomemts/MainTitle/MainTitle';
import StatisticTable from './compomemts/StatisticTable/StatisticTable';

export default function Home() {
  return (
    <div>
      <MainTitle>Командная статистика</MainTitle>
      <StatisticTable />
    </div>
  );
}
