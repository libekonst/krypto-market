import styled from 'styled-components';
import { CoinAnalysis } from '../CoinAnalysis';
import { SocialLinks } from './SocialLinks';
import { WebLinks } from './WebLinks';

type Props = {
  coinAnalysis: CoinAnalysis;
};
export function CommunityCard({ coinAnalysis }: Props) {
  return (
    <Wrapper>
      <SocialLinks coinAnalysis={coinAnalysis} />
      {coinAnalysis.weblinks && <WebLinks links={coinAnalysis.weblinks} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 1px 2px 8px ${props => props.theme.colors.lightShade};
  /* width: 5rem; */
  border-radius: 5px;
  max-width: 25rem;
`;
