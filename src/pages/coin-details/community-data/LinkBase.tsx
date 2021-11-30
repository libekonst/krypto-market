import styled from 'styled-components';

export const LinkBase = styled.a`
  background-color: ${props => props.theme.colors.lightShade};
  color: ${props => props.theme.colors.darkShade};
  padding: 0.1rem 1rem;
  /* border: 1px solid ${props => props.theme.colors.primary}; */
  border-radius: 25px;
  margin-bottom: 0.5rem;
  transition: filter 0.1s linear;
  text-decoration: none;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.9);
  }
`;
