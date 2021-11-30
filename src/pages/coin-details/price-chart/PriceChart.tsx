import { useCallback, useState, memo, useMemo } from 'react';
import { Chart, AxisOptions } from 'react-charts';
import styled from 'styled-components';
import {
  isFailure,
  isLoading,
  isSuccess,
  useDataLoader
} from '../../../lib/useDataLoader';
import { Spinner } from '../../../ui-kit/feedback/Spinner';
import { Row } from '../../../ui-kit/layout/Row';
import { fetchPriceChartData } from './api/fetchPriceChartData';
import { ChartDurationIncrements } from './ChartDurationIncrements';
import { IncrementTabButton } from './IncrementTabButton';
import { PriceChartEntries } from './PriceChartEntries';

type Props = {
  coinId: string;
};
export function PriceChart({ coinId }: Props) {
  const [activeIncrement, changeActiveIncrement] = useState(
    ChartDurationIncrements.DAY
  );

  const loadData = useCallback(
    () => fetchPriceChartData(coinId, activeIncrement),
    [activeIncrement, coinId]
  );
  const res = useDataLoader(loadData);

  return (
    <Section>
      <SectionTitle>USD Chart</SectionTitle>
      <Tabs>
        {INCREMENT_TABS.map(({ key, display }) => (
          <IncrementTabButton
            key={key}
            onClick={() => changeActiveIncrement(key)}
            active={key === activeIncrement}
          >
            {display}
          </IncrementTabButton>
        ))}
      </Tabs>
      <ChartBox>
        {isLoading(res) && <Spinner />}

        {isFailure(res) && <ErrorMessage>Failed to load chart</ErrorMessage>}

        {isSuccess(res) && <ChartView entries={res.data} />}
      </ChartBox>
    </Section>
  );
}

type ChartViewProps = { entries: PriceChartEntries };
const ChartView = memo(({ entries }: ChartViewProps) => {
  const primaryAxis = useMemo<AxisOptions<typeof entries[number]>>(
    () => ({ getValue: datum => datum.date }),
    []
  );
  const secondaryAxes = useMemo<AxisOptions<typeof entries[number]>[]>(
    () => [{ getValue: datum => datum.price }],
    []
  );

  return (
    <Chart
      options={{
        data: [{ label: 'Price', data: entries }],
        primaryAxis: primaryAxis,
        secondaryAxes: secondaryAxes
      }}
    />
  );
});

const INCREMENT_TABS = [
  { key: ChartDurationIncrements.DAY, display: '1 Day' },
  { key: ChartDurationIncrements.TWO_WEEKS, display: '2 Weeks' },
  { key: ChartDurationIncrements.MONTH, display: '1 Month' },
  { key: ChartDurationIncrements.THREE_MONTHS, display: '3 Months' },
  { key: ChartDurationIncrements.YEAR, display: '1 Year' },
  { key: ChartDurationIncrements.LIFETIME, display: 'All' }
];

type SectionProps = { disabled?: boolean };
const Section = styled.section<SectionProps>`
  width: 100%;
  margin-top: 1rem;
`;

const ChartBox = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tabs = styled(Row)`
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const SectionTitle = styled.p`
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;
