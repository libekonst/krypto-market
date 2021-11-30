import styled from 'styled-components';

type Props = {
  src?: string;
};

export function CoinThumb({ src }: Props) {
  if (!src) return <Placeholder />;

  return <CoinImage src={src} />;
}

const CoinImage = styled.img`
  width: 4rem;
`;

const Placeholder = styled.div`
  background-color: ${props => props.theme.colors.lightShade};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
