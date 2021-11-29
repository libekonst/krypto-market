import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';

export const LightButton = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.lightShade};
  color: ${props => props.theme.colors.primary};
  filter: drop-shadow(1px 2px 8px ${props => props.theme.colors.lightShade});
  transition: filter 0.1s linear;

  &:hover {
    filter: drop-shadow(1px 2px 8px ${props => props.theme.colors.lightShade})
      brightness(0.95);
  }

  &:active {
    filter: drop-shadow(1px 2px 8px ${props => props.theme.colors.lightShade})
      brightness(0.9);
  }
`;
