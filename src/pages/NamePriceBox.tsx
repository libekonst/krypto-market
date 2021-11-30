import styled from 'styled-components';
import { Column } from '../ui-kit/layout/Column';
import { Row } from '../ui-kit/layout/Row';

type Props = {
  name: string;
  symbol: string;
  currentPrice?: string;
  percentageChange?: string;
};

export function NamePriceBox(props: Props) {
  const { currentPrice, percentageChange, name, symbol } = props;
  return (
    <Column crossAxis="flex-start">
      <Spacing>
        <Row>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </Row>
        <Row crossAxis="flex-start">
          <Price>{currentPrice}</Price>
          {percentageChange && (
            <ChangeText isNegative={isNegative(percentageChange)}>
              {percentageChange}
            </ChangeText>
          )}
        </Row>
      </Spacing>
    </Column>
  );
}

const Spacing = styled.div`
  margin-left: 1.5rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  margin-left: 0.2rem;
  margin-right: 0.5rem;
`;

const Symbol = styled.div`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.lightShade};
  border-radius: 5px;
  padding: 0 0.3rem;
  font-size: 0.9rem;
  align-self: top;
`;

const Price = styled.div`
  font-size: 2.5rem;
  padding: 0;
`;

type ChangeProps = { isNegative?: boolean };
const ChangeText = styled.div<ChangeProps>`
  font-size: 1rem;
  color: ${({ theme, isNegative }) =>
    isNegative ? theme.colors.negative : theme.colors.positive};
  font-weight: bold;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
`;

const isNegative = (x: string) => x.includes('-');
