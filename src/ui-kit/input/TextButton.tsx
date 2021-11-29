import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';

export const TextButton = styled(ButtonBase)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.1s linear;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.85);
  }
`;
