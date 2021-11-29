import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';

export const IconButton = styled(ButtonBase)`
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.1s linear;
  padding: 1rem;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.85);
  }
`;
