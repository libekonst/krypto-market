import styled from 'styled-components';
import { PrimaryButton } from './ui-kit/input/PrimaryButton';
import { Row } from './ui-kit/layout/Row';

export function AppHeader() {
  return (
    <Wrapper>
      <Row mainAxis="space-between">
        <Logo />
        <PrimaryButton>Log in</PrimaryButton>
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
