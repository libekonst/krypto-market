import styled from 'styled-components';
import { Row } from '../ui-kit/layout/Row';

type Props = {
  label: string;
  value: string;
};

export function PriceMetricLabel({ label, value }: Props) {
  return (
    <Wrapper>
      <Label>{label}: </Label>
      <Value>{value}</Value>
    </Wrapper>
  );
}

const Wrapper = styled(Row)`
  background-color: ${props => props.theme.colors.lightShade};
  border-radius: 5px;
  padding: 0.1rem 0.7rem;
  margin: 0.3rem 0.3rem 0 0;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 0.2rem;
`;

const Value = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.colors.darkShade};
  font-weight: 600;
`;
