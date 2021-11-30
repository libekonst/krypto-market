import styled from 'styled-components';
import { LightButton } from './ui-kit/input/LightButton';
import { Row } from './ui-kit/layout/Row';

export function AppHeader() {
  return (
    <Wrapper>
      <Row mainAxis="space-between">
        <Logo />
        <LightButton>Log in</LightButton>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 1rem 7rem 1rem 4rem;
  background-color: white;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightShade};
`;

function Logo() {
  return <LogoText>Krypto Market</LogoText>;
}

const LogoText = styled.h1`
  color: ${props => props.theme.colors.darkShade};
`;
